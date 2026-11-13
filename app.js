/* LR Personal Training — app clienti (PWA) */
"use strict";
var SB_URL = "https://rrvjfrreakpomarkjoqv.supabase.co";
var SB_KEY = "sb_publishable_8CIg1mkj4ADyQEtWGJhtvQ_kjI92qEx";
var CLIENT_DOMAIN = "@clienti.lrpt.app";
var sb = window.supabase.createClient(SB_URL, SB_KEY);
var S = { user: null, me: null, tab: null, view: null };
var root = document.getElementById("app");

/* ---------- utility ---------- */
function h(tag, attrs) {
  var el = document.createElement(tag);
  if (attrs) for (var k in attrs) {
    var v = attrs[k];
    if (v === null || v === undefined || v === false) continue;
    if (k.slice(0, 2) === "on") el.addEventListener(k.slice(2), v);
    else if (k === "class") el.className = v;
    else if (k === "html") el.innerHTML = v;
    else if (k === "value") el.value = v;
    else el.setAttribute(k, v === true ? "" : v);
  }
  for (var i = 2; i < arguments.length; i++) add(el, arguments[i]);
  return el;
}
function add(el, c) {
  if (c === null || c === undefined || c === false) return;
  if (Array.isArray(c)) { c.forEach(function (x) { add(el, x); }); return; }
  el.appendChild(c.nodeType ? c : document.createTextNode(String(c)));
}
function $(sel, ctx) { return (ctx || document).querySelector(sel); }
function val(id) { var e = document.getElementById(id); if (!e) return null; var v = e.value.trim(); return v === "" ? null : v; }
function num(id) { var v = val(id); return v === null ? null : Number(String(v).replace(",", ".")); }
function fmtDate(d) { if (!d) return "—"; var p = String(d).slice(0, 10).split("-"); return p[2] + "/" + p[1] + "/" + p[0]; }
function today() { var d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); }
function n2(x) { return x === null || x === undefined ? "—" : String(x).replace(".", ","); }
function euro(n) { return n === null || n === undefined ? "—" : "€ " + Number(n).toFixed(2).replace(".", ","); }
function toast(msg) {
  var t = h("div", { class: "toast" }, msg); document.body.appendChild(t);
  setTimeout(function () { t.classList.add("show"); }, 10);
  setTimeout(function () { t.classList.remove("show"); setTimeout(function () { t.remove(); }, 300); }, 2400);
}
function fail(e) { console.error(e); toast((e && e.message) ? traduci(e.message) : "Si è verificato un errore"); }
function traduci(m) {
  if (/Invalid login credentials/i.test(m)) return "Username o password non corretti";
  if (/Password should be/i.test(m)) return "La password deve avere almeno 8 caratteri";
  if (/same_password|different from the old/i.test(m)) return "La nuova password deve essere diversa dalla precedente";
  return m;
}
async function q(promise) { var r = await promise; if (r.error) throw r.error; return r.data; }
function field(lbl, id, type, value, extra) {
  var a = Object.assign({ id: id, type: type || "text", value: value === null || value === undefined ? "" : value }, extra || {});
  return h("div", null, h("label", { for: id }, lbl), type === "textarea" ? h("textarea", a) : h("input", a));
}
function select(lbl, id, options, value) {
  var s = h("select", { id: id }, options.map(function (o) {
    var opt = h("option", { value: o[0] }, o[1]); if (String(o[0]) === String(value)) opt.selected = true; return opt;
  }));
  return h("div", null, h("label", { for: id }, lbl), s);
}
function modal(title, body, onSave, saveLabel) {
  var m = h("div", { class: "modal", onclick: function (e) { if (e.target === m) m.remove(); } },
    h("div", { class: "sheet" },
      h("div", { class: "row" }, h("h2", null, title), h("button", { class: "link", onclick: function () { m.remove(); } }, "Chiudi")),
      body,
      onSave ? h("button", { class: "btn block", onclick: async function (e) {
        e.target.disabled = true;
        try { var ok = await onSave(); if (ok !== false) m.remove(); } catch (err) { fail(err); }
        e.target.disabled = false;
      } }, saveLabel || "Salva") : null));
  document.body.appendChild(m);
  var first = m.querySelector("input,textarea,select"); if (first && window.innerWidth > 700) first.focus();
  return m;
}
function confirmDo(msg, fn) {
  var m = h("div", { class: "modal", style: "z-index:60;align-items:center" },
    h("div", { class: "sheet", style: "max-width:420px;border-radius:22px" },
      h("p", { style: "margin-top:0" }, msg),
      h("div", { class: "row", style: "justify-content:flex-end;margin-top:14px" },
        h("button", { class: "btn ghost sm", onclick: function () { m.remove(); } }, "Annulla"),
        h("button", { class: "btn sm", style: "background:#A0524F", onclick: function () { m.remove(); fn(); } }, "Elimina"))));
  document.body.appendChild(m);
}
var MAX_VIDEO = 50 * 1024 * 1024;
function isStored(u) { return !!(u && u.indexOf("/object/public/videos/") > -1); }
function removeVideo(url) { var m = url && url.match(/\/object\/public\/videos\/(.+)$/); if (m) sb.storage.from("videos").remove([decodeURIComponent(m[1])]); }
async function uploadVideo(file, oldUrl) {
  if (file.size > MAX_VIDEO) throw { message: "Video troppo pesante (" + Math.round(file.size / 1048576) + " MB, massimo 50 MB). Registra in 720p o accorcia la clip." };
  var ext = (file.name.split(".").pop() || "mp4").toLowerCase().replace(/[^a-z0-9]/g, "") || "mp4";
  var path = "esercizi/" + Date.now() + "-" + Math.random().toString(36).slice(2, 8) + "." + ext;
  var b = $(".modal .btn.block:not(.ghost)"); if (b) b.textContent = "Caricamento video… attendi";
  await q(sb.storage.from("videos").upload(path, file, { contentType: file.type || "video/mp4", cacheControl: "31536000" }));
  if (oldUrl) removeVideo(oldUrl);
  return sb.storage.from("videos").getPublicUrl(path).data.publicUrl;
}
function videoPicker(id, hasVideo) {
  return h("div", null, h("label", { for: id }, "Video dell'esercizio"),
    hasVideo ? h("div", { class: "small muted", style: "margin-bottom:6px" }, "Video già presente ✓ — caricane uno nuovo solo per sostituirlo") : null,
    h("input", { id: id, type: "file", accept: "video/*" }),
    h("div", { class: "small muted", style: "margin-top:4px" }, "Registralo ora o sceglilo dalla galleria. Massimo 50 MB (circa 1 minuto in 720p)."));
}
function pickedFile(id) { var e = document.getElementById(id); return e && e.files && e.files[0] ? e.files[0] : null; }
function videoEmbed(url) {
  if (!url) return null;
  if (isStored(url) || /\.(mp4|mov|webm|m4v)(\?|$)/i.test(url)) return h("video", { class: "vid", src: url, controls: true, playsinline: true, preload: "metadata" });
  var m = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{6,})/);
  if (m) return h("div", { class: "video" }, h("iframe", { src: "https://www.youtube-nocookie.com/embed/" + m[1], allow: "fullscreen; picture-in-picture", allowfullscreen: true, loading: "lazy" }));
  var v = url.match(/vimeo\.com\/(\d+)/);
  if (v) return h("div", { class: "video" }, h("iframe", { src: "https://player.vimeo.com/video/" + v[1], allow: "fullscreen; picture-in-picture", allowfullscreen: true, loading: "lazy" }));
  return h("p", null, h("a", { href: url, target: "_blank", rel: "noopener" }, "▶ Guarda il video"));
}
function lineChart(points, unit) {
  if (points.length < 2) return null;
  var W = 600, H = 150, P = 24;
  var ys = points.map(function (p) { return p.y; });
  var min = Math.min.apply(null, ys), max = Math.max.apply(null, ys); if (min === max) { min -= 1; max += 1; }
  var pts = points.map(function (p, i) {
    return [P + i * (W - 2 * P) / (points.length - 1), H - P - (p.y - min) / (max - min) * (H - 2 * P)];
  });
  var d = pts.map(function (p, i) { return (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1); }).join(" ");
  var svg = '<svg class="chart" viewBox="0 0 ' + W + " " + H + '" preserveAspectRatio="none">' +
    '<path d="' + d + '" fill="none" stroke="#B7787F" stroke-width="2.5" vector-effect="non-scaling-stroke"/>' +
    pts.map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="#B7787F"/>'; }).join("") + "</svg>";
  return h("div", null, h("div", { html: svg }),
    h("div", { class: "row small muted" }, h("span", null, fmtDate(points[0].x) + " · " + n2(points[0].y) + " " + unit),
      h("span", null, fmtDate(points[points.length - 1].x) + " · " + n2(points[points.length - 1].y) + " " + unit)));
}

/* ---------- avvio e login ---------- */
async function boot() {
  var s = await sb.auth.getSession();
  if (s.data.session) await afterLogin(s.data.session.user); else renderLogin();
}
async function afterLogin(user) {
  S.user = user;
  try { S.me = await q(sb.from("profiles").select("*").eq("id", user.id).single()); }
  catch (e) { fail(e); await sb.auth.signOut(); return renderLogin(); }
  if (!S.me.active && S.me.role !== "admin") { await sb.auth.signOut(); return renderLogin("Account non attivo. Contatta la tua personal trainer."); }
  S.tab = S.me.role === "admin" ? "clienti" : "allenamento";
  S.view = null; render();
}
function renderLogin(msg) {
  root.innerHTML = "";
  var err = h("div", { class: "err" }, msg || "");
  var form = h("form", { class: "login", onsubmit: async function (e) {
      e.preventDefault();
      var u = val("lu"), p = $("#lp").value;
      if (!u || !p) { err.textContent = "Inserisci username e password"; return; }
      var email = u.indexOf("@") > -1 ? u.toLowerCase() : u.toLowerCase() + CLIENT_DOMAIN;
      var b = $("#lb"); b.disabled = true; err.textContent = "";
      var r = await sb.auth.signInWithPassword({ email: email, password: p });
      b.disabled = false;
      if (r.error) { err.textContent = traduci(r.error.message); return; }
      afterLogin(r.data.user);
    } },
    h("div", { class: "mono" }, "LR"),
    h("h1", null, "Lorena Rigoni"),
    h("div", { class: "tag" }, "Personal Training"),
    field("Username", "lu", "text", "", { autocomplete: "username", autocapitalize: "none", autocorrect: "off" }),
    field("Password", "lp", "password", "", { autocomplete: "current-password" }),
    h("button", { class: "btn block", id: "lb", type: "submit" }, "Accedi"),
    err,
    h("p", { class: "small muted", style: "text-align:center;margin-top:28px" }, "Hai dimenticato la password? Scrivi a Lorena su WhatsApp."));
  root.appendChild(form);
}
async function logout() { await sb.auth.signOut(); S.user = S.me = null; renderLogin(); }

/* ---------- shell ---------- */
var ADMIN_TABS = [["clienti", "Clienti", "♡"], ["esercizi", "Esercizi", "◇"], ["scadenze", "Scadenze", "◷"], ["profilo", "Profilo", "○"]];
var CLIENT_TABS = [["allenamento", "Allenati", "♡"], ["progressi", "Progressi", "↗"], ["obiettivi", "Obiettivi", "◇"], ["profilo", "Profilo", "○"]];
function go(tab, view) { S.tab = tab; S.view = view || null; render(); window.scrollTo(0, 0); }
function openView(view) { S.view = view; render(); window.scrollTo(0, 0); }
async function render() {
  root.innerHTML = "";
  var main = h("div", { class: "wrap" });
  var tabs = S.me.role === "admin" ? ADMIN_TABS : CLIENT_TABS;
  root.appendChild(main);
  root.appendChild(h("nav", { class: "tabs" }, tabs.map(function (t) {
    return h("button", { class: S.tab === t[0] ? "on" : "", onclick: function () { go(t[0]); } }, h("span", { class: "ic" }, t[2]), t[1]);
  })));
  main.appendChild(h("div", { class: "top" },
    h("div", { class: "brand" }, "LR", h("small", null, "Personal Training")),
    h("span", { class: "small muted" }, S.me.full_name || S.me.username)));
  var body = h("div"); main.appendChild(body);
  body.appendChild(h("div", { class: "empty" }, "Caricamento…"));
  try {
    var fn = VIEWS[S.view ? S.view.name : S.tab];
    var out = await fn(S.view || {});
    body.innerHTML = ""; add(body, out);
  } catch (e) { body.innerHTML = ""; body.appendChild(h("div", { class: "empty" }, "Impossibile caricare i dati.")); fail(e); }
}
var VIEWS = {};

/* =================== AREA ADMIN =================== */
VIEWS.clienti = async function () {
  var clients = await q(sb.from("profiles").select("*").eq("role", "client").order("full_name"));
  var showAll = S.showInactive;
  var list = clients.filter(function (c) { return showAll || c.active; });
  return [
    h("div", { class: "row" }, h("h1", null, "Clienti"), h("button", { class: "btn sm", onclick: newClient }, "+ Nuovo")),
    h("div", { class: "card list" }, list.length ? list.map(function (c) {
      return h("div", { class: "item", onclick: function () { openView({ name: "cliente", id: c.id, sub: "scheda" }); } },
        h("div", null, h("div", null, c.full_name || c.username), h("div", { class: "small muted" }, "@" + c.username + (c.training_mode ? " · " + c.training_mode : ""))),
        c.active ? h("span", { class: "muted" }, "›") : h("span", { class: "pill off" }, "non attivo"));
    }) : h("div", { class: "empty" }, "Nessun cliente. Crea il primo con “+ Nuovo”.")),
    h("button", { class: "link small", onclick: function () { S.showInactive = !showAll; render(); } }, showAll ? "Nascondi clienti non attivi" : "Mostra anche clienti non attivi")
  ];
};
function newClient() {
  modal("Nuovo cliente", [
    field("Nome e cognome", "nc_name"),
    field("Username (per l'accesso)", "nc_user", "text", "", { autocapitalize: "none", placeholder: "es. giulia.rossi" }),
    field("Password iniziale (min. 8 caratteri)", "nc_pass", "text"),
    select("Modalità", "nc_mode", [["presenza", "In presenza"], ["online", "Online"], ["misto", "Misto"]], "presenza"),
    field("Telefono", "nc_phone", "tel"),
    h("p", { class: "small muted" }, "Comunica username e password al cliente: potrà cambiare la password dal suo profilo.")
  ], async function () {
    var name = val("nc_name"), user = val("nc_user"), pass = $("#nc_pass").value;
    if (!name || !user || !pass) { toast("Compila nome, username e password"); return false; }
    var id = await q(sb.rpc("admin_create_client", { p_username: user, p_password: pass, p_full_name: name }));
    await q(sb.from("profiles").update({ training_mode: val("nc_mode"), phone: val("nc_phone") }).eq("id", id));
    toast("Cliente creato"); openView({ name: "cliente", id: id, sub: "scheda" });
  }, "Crea account");
}

VIEWS.cliente = async function (v) {
  var c = await q(sb.from("profiles").select("*").eq("id", v.id).single());
  var subs = [["scheda", "Schede"], ["diario", "Diario"], ["misure", "Misure"], ["obiettivi", "Obiettivi"], ["pagamenti", "Pagamenti"], ["note", "Note"], ["account", "Account"]];
  var content = await CLIENT_SUB[v.sub](c, v);
  return [
    h("button", { class: "back", onclick: function () { go("clienti"); } }, "‹ Tutti i clienti"),
    h("h1", null, c.full_name || c.username),
    h("div", { class: "small muted", style: "margin-top:-6px" }, "@" + c.username + (c.phone ? " · " + c.phone : "")),
    h("div", { class: "subnav" }, subs.map(function (s) {
      return h("button", { class: v.sub === s[0] ? "on" : "", onclick: function () { openView({ name: "cliente", id: v.id, sub: s[0] }); } }, s[1]);
    })),
    content
  ];
};
var CLIENT_SUB = {};
function reloadClient(c, sub, extra) { openView(Object.assign({ name: "cliente", id: c.id, sub: sub }, extra || {})); }

/* --- schede --- */
CLIENT_SUB.scheda = async function (c, v) {
  var progs = await q(sb.from("programs").select("*, program_days(*, program_exercises(*, exercises(name)))").eq("client_id", c.id).order("created_at", { ascending: false }));
  var out = [h("div", { class: "row" }, h("h2", null, "Schede"), h("button", { class: "btn sm", onclick: function () { editProgram(c); } }, "+ Nuova scheda"))];
  if (!progs.length) out.push(h("div", { class: "card empty" }, "Nessuna scheda ancora."));
  progs.forEach(function (p) {
    var days = (p.program_days || []).sort(function (a, b) { return a.position - b.position; });
    out.push(h("div", { class: "card" },
      h("div", { class: "row" }, h("div", null, h("h3", null, p.title), h("div", { class: "small muted" }, (p.start_date ? "dal " + fmtDate(p.start_date) : "") + (p.end_date ? " al " + fmtDate(p.end_date) : ""))),
        h("span", { class: "pill " + (p.active ? "ok" : "off") }, p.active ? "attiva" : "archiviata")),
      p.description ? h("p", { class: "small" }, p.description) : null,
      days.map(function (d) {
        var exs = (d.program_exercises || []).sort(function (a, b) { return a.position - b.position; });
        return h("div", { class: "ex" },
          h("div", { class: "row" }, h("strong", null, d.name),
            h("span", null, h("button", { class: "btn sm", onclick: function () { pickExercises(c, d, exs.length); } }, "+ Esercizi"), " ",
              h("button", { class: "link small", onclick: function () { editDay(c, p, d); } }, "modifica"))),
          d.notes ? h("div", { class: "small muted" }, d.notes) : null,
          exs.length ? h("div", { class: "list" }, exs.map(function (e) {
            return h("div", { class: "item", onclick: function () { editProgEx(c, d, e); } },
              h("div", null, h("div", null, e.exercises ? e.exercises.name : "Esercizio"),
                h("div", { class: "small muted" }, [e.sets ? e.sets + " serie" : null, e.reps ? "× " + e.reps : null, e.target_load ? "· " + e.target_load : null, e.rest_seconds ? "· rec. " + e.rest_seconds + "″" : null].filter(Boolean).join(" "))),
              h("span", { class: "muted" }, "›"));
          })) : h("div", { class: "small muted" }, "Nessun esercizio."));
      }),
      h("div", { class: "row", style: "margin-top:14px" },
        h("button", { class: "btn ghost sm", onclick: function () { editDay(c, p, null, days.length); } }, "+ Giorno"),
        h("button", { class: "link small", onclick: function () { editProgram(c, p); } }, "Modifica scheda"))));
  });
  return out;
};
function editProgram(c, p) {
  p = p || {};
  modal(p.id ? "Modifica scheda" : "Nuova scheda", [
    field("Titolo", "pg_t", "text", p.title, { placeholder: "es. Tonificazione – blocco 1" }),
    field("Descrizione / indicazioni generali", "pg_d", "textarea", p.description),
    h("div", { class: "grid2" }, field("Inizio", "pg_s", "date", p.start_date || today()), field("Fine", "pg_e", "date", p.end_date)),
    select("Stato", "pg_a", [["true", "Attiva"], ["false", "Archiviata"]], p.id ? String(p.active) : "true"),
    p.id ? h("button", { class: "btn danger sm", style: "margin-top:16px", onclick: function () {
      confirmDo("Eliminare questa scheda con tutti i suoi giorni?", async function () {
        try { await q(sb.from("programs").delete().eq("id", p.id)); document.querySelector(".modal").remove(); reloadClient(c, "scheda"); } catch (e) { fail(e); }
      });
    } }, "Elimina scheda") : null
  ], async function () {
    var row = { client_id: c.id, title: val("pg_t"), description: val("pg_d"), start_date: val("pg_s"), end_date: val("pg_e"), active: $("#pg_a").value === "true" };
    if (!row.title) { toast("Inserisci un titolo"); return false; }
    if (p.id) await q(sb.from("programs").update(row).eq("id", p.id));
    else {
      var np = await q(sb.from("programs").insert(row).select().single());
      var nd = await q(sb.from("program_days").insert({ program_id: np.id, name: "Giorno A", position: 0 }).select().single());
      reloadClient(c, "scheda"); pickExercises(c, nd, 0); return;
    }
    reloadClient(c, "scheda");
  });
}
function editDay(c, p, d, pos) {
  d = d || {};
  modal(d.id ? "Modifica giorno" : "Nuovo giorno", [
    field("Nome", "dy_n", "text", d.name, { placeholder: "es. Giorno B – Glutei e gambe" }),
    field("Note", "dy_x", "textarea", d.notes),
    field("Ordine", "dy_p", "number", d.id ? d.position : pos),
    d.id ? h("button", { class: "btn danger sm", style: "margin-top:16px", onclick: function () {
      confirmDo("Eliminare questo giorno?", async function () {
        try { await q(sb.from("program_days").delete().eq("id", d.id)); document.querySelector(".modal").remove(); reloadClient(c, "scheda"); } catch (e) { fail(e); }
      });
    } }, "Elimina giorno") : null
  ], async function () {
    var row = { program_id: p.id, name: val("dy_n") || "Giorno", notes: val("dy_x"), position: num("dy_p") || 0 };
    if (d.id) await q(sb.from("program_days").update(row).eq("id", d.id)); else await q(sb.from("program_days").insert(row));
    reloadClient(c, "scheda");
  });
}
async function pickExercises(c, d, pos) {
  var exs = await q(sb.from("exercises").select("id,name,muscle_group,equipment,video_url").order("name"));
  var chosen = [];
  var list = h("div", { class: "list" }), count = h("div", { class: "small muted", style: "margin-top:10px" });
  var draw = function () {
    var f = ($("#pk_q") ? $("#pk_q").value : "").toLowerCase();
    var groups = {};
    exs.filter(function (x) { return !f || (x.name + " " + (x.muscle_group || "")).toLowerCase().indexOf(f) > -1; })
      .forEach(function (x) { var g = x.muscle_group || "Altro"; (groups[g] = groups[g] || []).push(x); });
    list.innerHTML = "";
    Object.keys(groups).sort().forEach(function (g) {
      list.appendChild(h("div", { class: "eyebrow", style: "margin:14px 0 0" }, g));
      groups[g].forEach(function (x) {
        var n = chosen.indexOf(x.id);
        list.appendChild(h("div", { class: "item pick" + (n > -1 ? " on" : ""), onclick: function () {
            if (n > -1) chosen.splice(n, 1); else chosen.push(x.id); draw();
          } },
          h("div", null, h("div", null, x.name), h("div", { class: "small muted" }, [x.equipment, x.video_url ? "▶ video" : null].filter(Boolean).join(" · "))),
          h("span", { class: "chk" }, n > -1 ? String(n + 1) : "")));
      });
    });
    if (!list.childNodes.length) list.appendChild(h("div", { class: "empty" }, exs.length ? "Nessun esercizio trovato." : "La libreria è vuota: crea il primo esercizio qui sotto."));
    count.textContent = chosen.length ? "Selezionati: " + chosen.length + " (verranno aggiunti in quest'ordine)" : "Tocca gli esercizi da aggiungere alla scheda.";
  };
  modal("Libreria esercizi", [
    h("div", { class: "small muted" }, "Giorno: " + d.name),
    h("input", { id: "pk_q", type: "search", placeholder: "Cerca esercizio o gruppo muscolare…", oninput: function () { draw(); }, style: "margin-top:10px" }),
    h("div", { class: "grid2" }, field("Serie per ciascuno", "pk_s", "number", 3, { inputmode: "numeric" }), field("Ripetizioni", "pk_r", "text", "10")),
    count, list,
    h("button", { class: "btn ghost block", onclick: function () { document.querySelector(".modal").remove(); editProgEx(c, d, null, pos); } }, "+ Crea nuovo esercizio (con video)")
  ], async function () {
    if (!chosen.length) { toast("Seleziona almeno un esercizio"); return false; }
    var s = num("pk_s"), r = val("pk_r");
    await q(sb.from("program_exercises").insert(chosen.map(function (id, i) { return { day_id: d.id, exercise_id: id, sets: s, reps: r, position: (pos || 0) + i }; })));
    toast(chosen.length + (chosen.length === 1 ? " esercizio aggiunto" : " esercizi aggiunti") + ". Tocca un esercizio per carico e consigli.");
    reloadClient(c, "scheda");
  }, "Aggiungi alla scheda");
  draw();
}
async function editProgEx(c, d, e, pos) {
  e = e || {};
  var exs = await q(sb.from("exercises").select("id,name,muscle_group,video_url").order("name"));
  var opts = exs.map(function (x) { return [x.id, x.name + (x.muscle_group ? " (" + x.muscle_group + ")" : "") + (x.video_url ? " ▶" : "")]; });
  opts.push(["__new", "+ Nuovo esercizio…"]);
  var newBox = h("div", { style: "display:none" },
    field("Nome del nuovo esercizio", "pe_nn", "text", "", { placeholder: "es. Hip thrust con bilanciere" }),
    field("Gruppo muscolare", "pe_ng", "text", "", { placeholder: "Glutei" }),
    field("Consigli di esecuzione", "pe_nt", "textarea"));
  var hint = h("div");
  modal(e.id ? "Modifica esercizio" : "Nuovo esercizio nella scheda", [
    select("Esercizio", "pe_x", opts, e.exercise_id || "__new"),
    newBox, hint,
    h("div", { class: "grid3" }, field("Serie", "pe_s", "number", e.id ? e.sets : 3, { inputmode: "numeric" }), field("Ripetizioni", "pe_r", "text", e.id ? e.reps : "10", { placeholder: "8-12" }), field("Recupero (sec)", "pe_rest", "number", e.rest_seconds, { inputmode: "numeric" })),
    field("Carico indicativo", "pe_l", "text", e.target_load, { placeholder: "es. 10 kg, RPE 7" }),
    field("Consiglio per questo cliente", "pe_n", "textarea", e.notes),
    field("Ordine", "pe_p", "number", e.id ? e.position : pos),
    e.id ? h("button", { class: "btn danger sm", style: "margin-top:16px", onclick: function () {
      confirmDo("Togliere questo esercizio dal giorno?", async function () {
        try { await q(sb.from("program_exercises").delete().eq("id", e.id)); document.querySelector(".modal").remove(); reloadClient(c, "scheda"); } catch (er) { fail(er); }
      });
    } }, "Rimuovi dalla scheda") : null
  ], async function () {
    var exId = $("#pe_x").value, f = pickedFile("pe_file");
    if (exId === "__new") {
      var nn = val("pe_nn"); if (!nn) { toast("Inserisci il nome del nuovo esercizio"); return false; }
      var url = f ? await uploadVideo(f, null) : null;
      var ne = await q(sb.from("exercises").insert({ name: nn, muscle_group: val("pe_ng"), tips: val("pe_nt"), video_url: url }).select().single());
      exId = ne.id;
    } else if (f) {
      var cur = exs.filter(function (x) { return x.id === exId; })[0];
      var nu = await uploadVideo(f, cur && isStored(cur.video_url) ? cur.video_url : null);
      await q(sb.from("exercises").update({ video_url: nu }).eq("id", exId));
    }
    var row = { day_id: d.id, exercise_id: exId, sets: num("pe_s"), reps: val("pe_r"), rest_seconds: num("pe_rest"), target_load: val("pe_l"), notes: val("pe_n"), position: num("pe_p") || 0 };
    if (e.id) await q(sb.from("program_exercises").update(row).eq("id", e.id)); else await q(sb.from("program_exercises").insert(row));
    reloadClient(c, "scheda");
  });
  var sel = $("#pe_x");
  var sync = function () {
    newBox.style.display = sel.value === "__new" ? "" : "none";
    var cur = exs.filter(function (x) { return x.id === sel.value; })[0];
    hint.innerHTML = ""; hint.appendChild(videoPicker("pe_file", !!(cur && cur.video_url)));
  };
  sel.addEventListener("change", sync); sync();
}

/* --- diario (visto dall'admin) --- */
CLIENT_SUB.diario = async function (c) { return [h("h2", null, "Diario allenamenti"), await workoutHistory(c.id)]; };
async function workoutHistory(clientId) {
  var logs = await q(sb.from("workout_logs").select("*, program_days(name), set_logs(*, exercises(name))").eq("client_id", clientId).order("performed_on", { ascending: false }).limit(40));
  if (!logs.length) return h("div", { class: "card empty" }, "Nessun allenamento registrato.");
  return logs.map(function (w) {
    var byEx = {};
    (w.set_logs || []).sort(function (a, b) { return a.set_number - b.set_number; }).forEach(function (s) {
      var n = s.exercises ? s.exercises.name : "Esercizio"; (byEx[n] = byEx[n] || []).push(s);
    });
    return h("div", { class: "card" },
      h("div", { class: "row" }, h("h3", null, fmtDate(w.performed_on)), h("span", { class: "pill" }, w.program_days ? w.program_days.name : "Allenamento libero")),
      Object.keys(byEx).map(function (n) {
        return h("div", { class: "small", style: "margin:6px 0" }, h("strong", null, n + ": "),
          byEx[n].map(function (s) { return (s.weight_kg !== null ? n2(s.weight_kg) + " kg" : "—") + " × " + (s.reps !== null ? s.reps : "—"); }).join(" · "),
          byEx[n].filter(function (s) { return s.notes; }).map(function (s) { return h("div", { class: "muted" }, "“" + s.notes + "”"); }));
      }),
      w.notes ? h("div", { class: "tip" }, w.notes) : null);
  });
}

/* --- misure --- */
var MEAS = [["weight_kg", "Peso", "kg"], ["body_fat_pct", "Massa grassa", "%"], ["chest_cm", "Torace", "cm"], ["waist_cm", "Vita", "cm"], ["hips_cm", "Fianchi", "cm"], ["arm_cm", "Braccio", "cm"], ["thigh_cm", "Coscia", "cm"]];
CLIENT_SUB.misure = async function (c) {
  return [h("div", { class: "row" }, h("h2", null, "Misure"), h("button", { class: "btn sm", onclick: function () { editMeasure(c); } }, "+ Nuova")), await measuresView(c.id, c)];
};
async function measuresView(clientId, adminClient) {
  var ms = await q(sb.from("measurements").select("*").eq("client_id", clientId).order("measured_on"));
  if (!ms.length) return h("div", { class: "card empty" }, "Nessuna misura registrata.");
  var w = ms.filter(function (m) { return m.weight_kg !== null; }).map(function (m) { return { x: m.measured_on, y: Number(m.weight_kg) }; });
  var rev = ms.slice().reverse();
  return [
    w.length > 1 ? h("div", { class: "card" }, h("div", { class: "eyebrow" }, "Andamento peso"), lineChart(w, "kg")) : null,
    h("div", { class: "card scroll" }, h("table", null,
      h("thead", null, h("tr", null, h("th", null, "Data"), MEAS.map(function (m) { return h("th", null, m[1] + " (" + m[2] + ")"); }))),
      h("tbody", null, rev.map(function (m) {
        return h("tr", { style: adminClient ? "cursor:pointer" : null, onclick: adminClient ? function () { editMeasure(adminClient, m); } : null },
          h("td", null, fmtDate(m.measured_on)), MEAS.map(function (k) { return h("td", null, m[k[0]] !== null ? String(m[k[0]]).replace(".", ",") : "—"); }));
      })))),
    rev[0].notes ? h("div", { class: "tip" }, rev[0].notes) : null
  ];
}
function editMeasure(c, m) {
  m = m || {};
  modal(m.id ? "Modifica misure" : "Nuove misure", [
    field("Data", "ms_d", "date", m.measured_on || today()),
    h("div", { class: "grid2" }, MEAS.map(function (k) { return field(k[1] + " (" + k[2] + ")", "ms_" + k[0], "text", m[k[0]], { inputmode: "decimal" }); })),
    field("Note", "ms_n", "textarea", m.notes),
    m.id ? h("button", { class: "btn danger sm", style: "margin-top:16px", onclick: function () {
      confirmDo("Eliminare queste misure?", async function () { try { await q(sb.from("measurements").delete().eq("id", m.id)); document.querySelector(".modal").remove(); reloadClient(c, "misure"); } catch (e) { fail(e); } });
    } }, "Elimina") : null
  ], async function () {
    var row = { client_id: c.id, measured_on: val("ms_d"), notes: val("ms_n") };
    MEAS.forEach(function (k) { row[k[0]] = num("ms_" + k[0]); });
    if (m.id) await q(sb.from("measurements").update(row).eq("id", m.id)); else await q(sb.from("measurements").insert(row));
    reloadClient(c, "misure");
  });
}

/* --- obiettivi --- */
var GOAL_ST = { in_corso: ["In corso", ""], raggiunto: ["Raggiunto", "ok"], sospeso: ["Sospeso", "off"] };
CLIENT_SUB.obiettivi = async function (c) {
  return [h("div", { class: "row" }, h("h2", null, "Obiettivi"), h("button", { class: "btn sm", onclick: function () { editGoal(c); } }, "+ Nuovo")), await goalsView(c.id, c)];
};
async function goalsView(clientId, adminClient) {
  var gs = await q(sb.from("goals").select("*").eq("client_id", clientId).order("created_at", { ascending: false }));
  if (!gs.length) return h("div", { class: "card empty" }, "Nessun obiettivo impostato.");
  return gs.map(function (g) {
    var st = GOAL_ST[g.status];
    return h("div", { class: "card" + (adminClient ? " tap" : ""), onclick: adminClient ? function () { editGoal(adminClient, g); } : null },
      h("div", { class: "row" }, h("h3", null, g.title), h("span", { class: "pill " + st[1] }, st[0])),
      g.description ? h("p", { class: "small" }, g.description) : null,
      h("div", { class: "small muted" }, [g.target_value !== null ? "Traguardo: " + n2(g.target_value) + " " + (g.unit || "") : null, g.deadline ? "entro il " + fmtDate(g.deadline) : null, g.achieved_on ? "raggiunto il " + fmtDate(g.achieved_on) : null].filter(Boolean).join(" · ")));
  });
}
function editGoal(c, g) {
  g = g || {};
  modal(g.id ? "Modifica obiettivo" : "Nuovo obiettivo", [
    field("Obiettivo", "gl_t", "text", g.title, { placeholder: "es. Squat con 40 kg" }),
    field("Descrizione", "gl_d", "textarea", g.description),
    h("div", { class: "grid2" }, field("Valore obiettivo", "gl_v", "text", g.target_value, { inputmode: "decimal" }), field("Unità", "gl_u", "text", g.unit, { placeholder: "kg, cm, min" })),
    field("Scadenza", "gl_dl", "date", g.deadline),
    select("Stato", "gl_s", [["in_corso", "In corso"], ["raggiunto", "Raggiunto"], ["sospeso", "Sospeso"]], g.status || "in_corso"),
    g.id ? h("button", { class: "btn danger sm", style: "margin-top:16px", onclick: function () {
      confirmDo("Eliminare questo obiettivo?", async function () { try { await q(sb.from("goals").delete().eq("id", g.id)); document.querySelector(".modal").remove(); reloadClient(c, "obiettivi"); } catch (e) { fail(e); } });
    } }, "Elimina") : null
  ], async function () {
    var st = $("#gl_s").value;
    var row = { client_id: c.id, title: val("gl_t"), description: val("gl_d"), target_value: num("gl_v"), unit: val("gl_u"), deadline: val("gl_dl"), status: st,
      achieved_on: st === "raggiunto" ? (g.achieved_on || today()) : null };
    if (!row.title) { toast("Inserisci l'obiettivo"); return false; }
    if (g.id) await q(sb.from("goals").update(row).eq("id", g.id)); else await q(sb.from("goals").insert(row));
    reloadClient(c, "obiettivi");
  });
}

/* --- pagamenti --- */
var PAY_ST = { da_pagare: ["Da pagare", "warn"], pagato: ["Pagato", "ok"], annullato: ["Annullato", "off"] };
CLIENT_SUB.pagamenti = async function (c) {
  return [
    h("div", { class: "row" }, h("h2", null, "Abbonamenti"), h("button", { class: "btn sm", onclick: function () { editSub(c); } }, "+ Abbonamento")),
    await subsView(c.id, c),
    h("div", { class: "row", style: "margin-top:18px" }, h("h2", null, "Pagamenti"), h("button", { class: "btn sm", onclick: function () { editPay(c); } }, "+ Pagamento")),
    await paysView(c.id, c)
  ];
};
async function subsView(clientId, adminClient) {
  var ss = await q(sb.from("subscriptions").select("*").eq("client_id", clientId).order("start_date", { ascending: false }));
  if (!ss.length) return h("div", { class: "card empty" }, "Nessun abbonamento.");
  return h("div", { class: "card list" }, ss.map(function (s) {
    var expired = s.end_date && s.end_date < today();
    return h("div", { class: "item", onclick: adminClient ? function () { editSub(adminClient, s); } : null },
      h("div", null, h("div", null, s.plan_name), h("div", { class: "small muted" }, fmtDate(s.start_date) + " → " + fmtDate(s.end_date) + " · " + euro(s.price_eur))),
      h("span", { class: "pill " + (expired ? "off" : "ok") }, expired ? "scaduto" : "attivo"));
  }));
}
async function paysView(clientId, adminClient) {
  var ps = await q(sb.from("payments").select("*").eq("client_id", clientId).order("due_date", { ascending: false }));
  if (!ps.length) return h("div", { class: "card empty" }, "Nessun pagamento registrato.");
  return h("div", { class: "card list" }, ps.map(function (p) {
    var st = PAY_ST[p.status]; var late = p.status === "da_pagare" && p.due_date && p.due_date < today();
    return h("div", { class: "item", onclick: adminClient ? function () { editPay(adminClient, p); } : null },
      h("div", null, h("div", null, euro(p.amount_eur) + (p.method ? " · " + p.method : "")),
        h("div", { class: "small muted" }, p.status === "pagato" ? "Pagato il " + fmtDate(p.paid_on) : "Scadenza " + fmtDate(p.due_date))),
      h("span", { class: "pill " + st[1] }, late ? "in ritardo" : st[0]));
  }));
}
function editSub(c, s) {
  s = s || {};
  modal(s.id ? "Modifica abbonamento" : "Nuovo abbonamento", [
    field("Pacchetto", "sb_n", "text", s.plan_name, { placeholder: "es. Mensile online, 10 lezioni" }),
    field("Prezzo (€)", "sb_p", "text", s.price_eur, { inputmode: "decimal" }),
    h("div", { class: "grid2" }, field("Inizio", "sb_s", "date", s.start_date || today()), field("Fine", "sb_e", "date", s.end_date)),
    field("Note", "sb_x", "textarea", s.notes),
    s.id ? null : h("label", { style: "display:flex;gap:8px;align-items:center;text-transform:none;letter-spacing:0;font-size:.9rem" },
      h("input", { type: "checkbox", id: "sb_pay", checked: true, style: "width:auto" }), "Crea anche il pagamento da incassare"),
    s.id ? h("button", { class: "btn danger sm", style: "margin-top:16px", onclick: function () {
      confirmDo("Eliminare questo abbonamento?", async function () { try { await q(sb.from("subscriptions").delete().eq("id", s.id)); document.querySelector(".modal").remove(); reloadClient(c, "pagamenti"); } catch (e) { fail(e); } });
    } }, "Elimina") : null
  ], async function () {
    var row = { client_id: c.id, plan_name: val("sb_n"), price_eur: num("sb_p"), start_date: val("sb_s"), end_date: val("sb_e"), notes: val("sb_x") };
    if (!row.plan_name || !row.start_date) { toast("Inserisci pacchetto e data di inizio"); return false; }
    if (s.id) await q(sb.from("subscriptions").update(row).eq("id", s.id));
    else {
      var ns = await q(sb.from("subscriptions").insert(row).select().single());
      if ($("#sb_pay").checked && row.price_eur) await q(sb.from("payments").insert({ client_id: c.id, subscription_id: ns.id, amount_eur: row.price_eur, due_date: row.start_date }));
    }
    reloadClient(c, "pagamenti");
  });
}
function editPay(c, p) {
  p = p || {};
  modal(p.id ? "Modifica pagamento" : "Nuovo pagamento", [
    field("Importo (€)", "py_a", "text", p.amount_eur, { inputmode: "decimal" }),
    h("div", { class: "grid2" }, field("Scadenza", "py_d", "date", p.due_date || today()), field("Pagato il", "py_p", "date", p.paid_on)),
    select("Stato", "py_s", [["da_pagare", "Da pagare"], ["pagato", "Pagato"], ["annullato", "Annullato"]], p.status || "da_pagare"),
    select("Metodo", "py_m", [["", "—"], ["Contanti", "Contanti"], ["Bonifico", "Bonifico"], ["POS", "POS / carta"], ["Satispay", "Satispay"], ["PayPal", "PayPal"]], p.method || ""),
    field("Note", "py_n", "textarea", p.notes),
    p.id ? h("button", { class: "btn danger sm", style: "margin-top:16px", onclick: function () {
      confirmDo("Eliminare questo pagamento?", async function () { try { await q(sb.from("payments").delete().eq("id", p.id)); document.querySelector(".modal").remove(); reloadClient(c, "pagamenti"); } catch (e) { fail(e); } });
    } }, "Elimina") : null
  ], async function () {
    var st = $("#py_s").value;
    var row = { client_id: c.id, amount_eur: num("py_a"), due_date: val("py_d"), paid_on: val("py_p") || (st === "pagato" ? today() : null), status: st, method: val("py_m"), notes: val("py_n") };
    if (!row.amount_eur) { toast("Inserisci l'importo"); return false; }
    if (p.id) await q(sb.from("payments").update(row).eq("id", p.id)); else await q(sb.from("payments").insert(row));
    reloadClient(c, "pagamenti");
  });
}

/* --- note private --- */
CLIENT_SUB.note = async function (c) {
  var r = await q(sb.from("client_notes").select("*").eq("client_id", c.id).maybeSingle());
  return h("div", { class: "card" },
    h("h2", null, "Note private"),
    h("p", { class: "small muted" }, "Visibili solo a Lorena e Alex: anamnesi, infortuni, preferenze, appunti."),
    h("textarea", { id: "cn", style: "min-height:220px", value: r ? r.notes : "" }),
    h("button", { class: "btn block", onclick: async function () {
      try { await q(sb.from("client_notes").upsert({ client_id: c.id, notes: $("#cn").value, updated_at: new Date().toISOString() })); toast("Note salvate"); } catch (e) { fail(e); }
    } }, "Salva note"),
    r ? h("div", { class: "small muted", style: "margin-top:8px" }, "Ultima modifica: " + fmtDate(r.updated_at)) : null);
};

/* --- account cliente --- */
CLIENT_SUB.account = async function (c) {
  return h("div", { class: "card" },
    h("h2", null, "Dati e accesso"),
    field("Nome e cognome", "ac_n", "text", c.full_name),
    h("div", { class: "grid2" }, field("Telefono", "ac_p", "tel", c.phone), field("Data di nascita", "ac_b", "date", c.birth_date)),
    select("Modalità", "ac_m", [["presenza", "In presenza"], ["online", "Online"], ["misto", "Misto"]], c.training_mode || "presenza"),
    select("Stato account", "ac_a", [["true", "Attivo"], ["false", "Non attivo (non può accedere)"]], String(c.active)),
    h("button", { class: "btn block", onclick: async function () {
      try {
        await q(sb.from("profiles").update({ full_name: val("ac_n") || "", phone: val("ac_p"), birth_date: val("ac_b"), training_mode: $("#ac_m").value, active: $("#ac_a").value === "true" }).eq("id", c.id));
        toast("Dati salvati"); reloadClient(c, "account");
      } catch (e) { fail(e); }
    } }, "Salva dati"),
    h("div", { class: "ex", style: "margin-top:22px" },
      h("h3", null, "Reimposta password"),
      h("p", { class: "small muted" }, "Username per l'accesso: ", h("strong", null, c.username)),
      field("Nuova password (min. 8 caratteri)", "ac_pw", "text"),
      h("button", { class: "btn ghost block", onclick: async function () {
        var pw = $("#ac_pw").value;
        if (pw.length < 8) return toast("Almeno 8 caratteri");
        try { await q(sb.rpc("admin_set_password", { p_user: c.id, p_password: pw })); $("#ac_pw").value = ""; toast("Password aggiornata"); } catch (e) { fail(e); }
      } }, "Imposta nuova password")));
};

/* --- libreria esercizi --- */
VIEWS.esercizi = async function () {
  var exs = await q(sb.from("exercises").select("*").order("name"));
  var groups = {};
  exs.forEach(function (e) { var g = e.muscle_group || "Altro"; (groups[g] = groups[g] || []).push(e); });
  return [
    h("div", { class: "row" }, h("h1", null, "Esercizi"), h("button", { class: "btn sm", onclick: function () { editExercise(); } }, "+ Nuovo")),
    exs.length ? Object.keys(groups).sort().map(function (g) {
      return h("div", { class: "card list" }, h("div", { class: "eyebrow" }, g), groups[g].map(function (e) {
        return h("div", { class: "item", onclick: function () { editExercise(e); } },
          h("div", null, h("div", null, e.name), h("div", { class: "small muted" }, [e.equipment, e.video_url ? "video ✓" : null].filter(Boolean).join(" · "))),
          h("span", { class: "muted" }, "›"));
      }));
    }) : h("div", { class: "card empty" }, "La libreria è vuota. Aggiungi gli esercizi che usi più spesso.")
  ];
};
function editExercise(e) {
  e = e || {};
  modal(e.id ? "Modifica esercizio" : "Nuovo esercizio", [
    field("Nome", "ex_n", "text", e.name, { placeholder: "es. Hip thrust con bilanciere" }),
    h("div", { class: "grid2" }, field("Gruppo muscolare", "ex_g", "text", e.muscle_group, { placeholder: "Glutei" }), field("Attrezzatura", "ex_e", "text", e.equipment, { placeholder: "Bilanciere" })),
    field("Descrizione", "ex_d", "textarea", e.description),
    field("Consigli di esecuzione", "ex_t", "textarea", e.tips),
    videoPicker("ex_file", !!e.video_url),
    field("Oppure link YouTube/Vimeo", "ex_v", "url", isStored(e.video_url) ? "" : e.video_url, { placeholder: "https://youtu.be/…" }),
    e.id ? h("button", { class: "btn danger sm", style: "margin-top:16px", onclick: function () {
      confirmDo("Eliminare l'esercizio dalla libreria?", async function () {
        try { await q(sb.from("exercises").delete().eq("id", e.id)); removeVideo(e.video_url); document.querySelector(".modal").remove(); go("esercizi"); }
        catch (er) { toast("Non eliminabile: è usato in una scheda"); }
      });
    } }, "Elimina") : null
  ], async function () {
    var row = { name: val("ex_n"), muscle_group: val("ex_g"), equipment: val("ex_e"), description: val("ex_d"), tips: val("ex_t") };
    if (!row.name) { toast("Inserisci il nome"); return false; }
    var f = pickedFile("ex_file"), link = val("ex_v");
    if (f) row.video_url = await uploadVideo(f, isStored(e.video_url) ? e.video_url : null);
    else if (link) { row.video_url = link; if (isStored(e.video_url)) removeVideo(e.video_url); }
    else row.video_url = isStored(e.video_url) ? e.video_url : null;
    if (e.id) await q(sb.from("exercises").update(row).eq("id", e.id)); else await q(sb.from("exercises").insert(row));
    go("esercizi");
  });
}

/* --- scadenze --- */
VIEWS.scadenze = async function () {
  var t = today();
  var in30 = new Date(Date.now() + 30 * 864e5).toISOString().slice(0, 10);
  var pays = await q(sb.from("payments").select("*, profiles(full_name, username)").eq("status", "da_pagare").order("due_date"));
  var subs = await q(sb.from("subscriptions").select("*, profiles(full_name, username)").gte("end_date", t).lte("end_date", in30).order("end_date"));
  var name = function (x) { return x.profiles ? (x.profiles.full_name || x.profiles.username) : ""; };
  var tot = pays.reduce(function (s, p) { return s + Number(p.amount_eur || 0); }, 0);
  return [
    h("h1", null, "Scadenze"),
    h("div", { class: "card" }, h("div", { class: "eyebrow" }, "Da incassare"), h("h2", { style: "margin:0" }, euro(tot)),
      h("div", { class: "small muted" }, pays.length + " pagamenti aperti")),
    h("h2", null, "Pagamenti aperti"),
    pays.length ? h("div", { class: "card list" }, pays.map(function (p) {
      var late = p.due_date && p.due_date < t;
      return h("div", { class: "item", onclick: function () { openView({ name: "cliente", id: p.client_id, sub: "pagamenti" }); } },
        h("div", null, h("div", null, name(p)), h("div", { class: "small muted" }, euro(p.amount_eur) + " · scad. " + fmtDate(p.due_date))),
        h("span", { class: "pill " + (late ? "warn" : "") }, late ? "in ritardo" : "da pagare"));
    })) : h("div", { class: "card empty" }, "Nessun pagamento in sospeso."),
    h("h2", null, "Abbonamenti in scadenza (30 giorni)"),
    subs.length ? h("div", { class: "card list" }, subs.map(function (s) {
      return h("div", { class: "item", onclick: function () { openView({ name: "cliente", id: s.client_id, sub: "pagamenti" }); } },
        h("div", null, h("div", null, name(s)), h("div", { class: "small muted" }, s.plan_name + " · fine " + fmtDate(s.end_date))), h("span", { class: "muted" }, "›"));
    })) : h("div", { class: "card empty" }, "Nessun abbonamento in scadenza.")
  ];
};

/* =================== AREA CLIENTE =================== */
VIEWS.allenamento = async function () {
  var progs = await q(sb.from("programs").select("*, program_days(*, program_exercises(id))").eq("client_id", S.me.id).eq("active", true).order("created_at", { ascending: false }));
  var last = await q(sb.from("workout_logs").select("performed_on, day_id").eq("client_id", S.me.id).order("performed_on", { ascending: false }).limit(1));
  var nome = (S.me.full_name || "").split(" ")[0];
  var out = [h("div", { class: "eyebrow" }, new Date().toLocaleDateString("it-IT", { weekday: "long", day: "numeric", month: "long" })),
    h("h1", null, "Ciao" + (nome ? " " + nome : "") + ","), h("p", { class: "muted", style: "margin-top:-8px" }, last.length ? "Ultimo allenamento: " + fmtDate(last[0].performed_on) : "Il tuo primo allenamento ti aspetta.")];
  if (!progs.length) { out.push(h("div", { class: "card empty" }, "La tua scheda è in preparazione. A presto!")); return out; }
  progs.forEach(function (p) {
    out.push(h("div", { class: "card" }, h("div", { class: "eyebrow" }, "La tua scheda"), h("h2", null, p.title),
      p.description ? h("p", { class: "small" }, p.description) : null,
      h("div", { class: "list" }, (p.program_days || []).sort(function (a, b) { return a.position - b.position; }).map(function (d) {
        return h("div", { class: "item", onclick: function () { openView({ name: "workout", day: d.id }); } },
          h("div", null, h("div", null, d.name), h("div", { class: "small muted" }, (d.program_exercises || []).length + " esercizi")), h("span", { class: "btn sm" }, "Inizia"));
      }))));
  });
  return out;
};
VIEWS.workout = async function (v) {
  var d = await q(sb.from("program_days").select("*, programs(title), program_exercises(*, exercises(*))").eq("id", v.day).single());
  var exs = (d.program_exercises || []).sort(function (a, b) { return a.position - b.position; });
  // ultimo carico registrato per ogni esercizio
  var prev = {};
  var ids = exs.map(function (e) { return e.exercise_id; });
  if (ids.length) {
    var logs = await q(sb.from("workout_logs").select("performed_on, set_logs(exercise_id, set_number, reps, weight_kg)").eq("client_id", S.me.id).order("performed_on", { ascending: false }).order("created_at", { ascending: false }).limit(30));
    logs.forEach(function (w) {
      (w.set_logs || []).forEach(function (r) {
        var k = r.exercise_id; if (ids.indexOf(k) < 0) return;
        if (!prev[k]) prev[k] = { date: w.performed_on, sets: {} };
        if (prev[k].date === w.performed_on && !prev[k].sets[r.set_number]) prev[k].sets[r.set_number] = r;
      });
    });
  }
  var form = h("div");
  exs.forEach(function (pe, i) {
    var e = pe.exercises || {}; var n = pe.sets || 3; var pv = prev[pe.exercise_id];
    var grid = h("div", { class: "sets" }, h("div", { class: "h" }, "Serie"), h("div", { class: "h" }, "Kg"), h("div", { class: "h" }, "Ripetizioni"));
    for (var s = 1; s <= n; s++) {
      var ps = pv && pv.sets[s];
      grid.appendChild(h("div", { class: "setn" }, s));
      grid.appendChild(h("input", { id: "w_" + i + "_" + s, inputmode: "decimal", placeholder: ps && ps.weight_kg !== null ? n2(ps.weight_kg) : "kg" }));
      grid.appendChild(h("input", { id: "r_" + i + "_" + s, inputmode: "numeric", placeholder: ps && ps.reps !== null ? String(ps.reps) : (pe.reps || "rip.") }));
    }
    form.appendChild(h("div", { class: "card" },
      h("div", { class: "eyebrow" }, "Esercizio " + (i + 1) + " di " + exs.length),
      h("h3", null, e.name),
      h("div", { class: "small muted" }, [pe.sets ? pe.sets + " serie" : null, pe.reps ? "× " + pe.reps : null, pe.target_load ? "· " + pe.target_load : null, pe.rest_seconds ? "· recupero " + pe.rest_seconds + "″" : null].filter(Boolean).join(" ")),
      pe.notes ? h("div", { class: "tip" }, h("strong", null, "Lorena: "), pe.notes) : null,
      e.tips ? h("details", { style: "margin-top:8px" }, h("summary", { class: "small", style: "cursor:pointer;color:var(--rose-d)" }, "Consigli di esecuzione"), h("p", { class: "small" }, e.tips), e.description ? h("p", { class: "small muted" }, e.description) : null) : null,
      videoEmbed(e.video_url),
      pv ? h("div", { class: "small muted", style: "margin-top:10px" }, "In grigio i valori dell'ultima volta (" + fmtDate(pv.date) + ")") : null,
      grid,
      h("label", { for: "n_" + i }, "Note"), h("input", { id: "n_" + i, placeholder: "Come è andata? (facoltativo)" })));
  });
  return [
    h("button", { class: "back", onclick: function () { go("allenamento"); } }, "‹ Indietro"),
    h("div", { class: "eyebrow" }, d.programs ? d.programs.title : ""),
    h("h1", null, d.name),
    d.notes ? h("div", { class: "tip", style: "margin-bottom:14px" }, d.notes) : null,
    exs.length ? form : h("div", { class: "card empty" }, "Nessun esercizio in questo giorno."),
    exs.length ? h("div", { class: "card" }, h("label", { for: "wn" }, "Note sull'allenamento"), h("textarea", { id: "wn", placeholder: "Sensazioni, energia, dolori…" }),
      h("button", { class: "btn block", onclick: async function (ev) {
        ev.target.disabled = true;
        try { if (await saveWorkout(d, exs) === false) ev.target.disabled = false; } catch (e) { fail(e); ev.target.disabled = false; }
      } }, "Salva allenamento")) : null
  ];
};
async function saveWorkout(d, exs) {
  var sets = [];
  exs.forEach(function (pe, i) {
    var note = val("n_" + i);
    for (var s = 1; s <= (pe.sets || 3); s++) {
      var w = num("w_" + i + "_" + s), r = num("r_" + i + "_" + s);
      if (w === null && r === null) continue;
      sets.push({ program_exercise_id: pe.id, exercise_id: pe.exercise_id, set_number: s, weight_kg: w, reps: r, notes: s === 1 ? note : null });
    }
    if (note && !sets.some(function (x) { return x.program_exercise_id === pe.id; })) sets.push({ program_exercise_id: pe.id, exercise_id: pe.exercise_id, set_number: 1, notes: note });
  });
  if (!sets.length && !val("wn")) { toast("Inserisci almeno una serie"); return false; }
  var w = await q(sb.from("workout_logs").insert({ client_id: S.me.id, day_id: d.id, performed_on: today(), notes: val("wn") }).select().single());
  if (sets.length) await q(sb.from("set_logs").insert(sets.map(function (x) { x.workout_log_id = w.id; return x; })));
  toast("Allenamento salvato. Ottimo lavoro!"); go(S.me.role === "admin" ? "clienti" : "progressi");
}
VIEWS.progressi = async function () {
  var sub = S.progSub || "diario";
  var subs = [["diario", "Diario"], ["misure", "Misure"], ["abbonamento", "Abbonamento"]];
  var content;
  if (sub === "diario") content = await workoutHistory(S.me.id);
  else if (sub === "misure") content = await measuresView(S.me.id, null);
  else content = [await subsView(S.me.id, null), h("h2", { style: "margin-top:16px" }, "Pagamenti"), await paysView(S.me.id, null)];
  return [h("h1", null, "Progressi"),
    h("div", { class: "subnav" }, subs.map(function (s) { return h("button", { class: sub === s[0] ? "on" : "", onclick: function () { S.progSub = s[0]; render(); } }, s[1]); })),
    content];
};
VIEWS.obiettivi = async function () { return [h("h1", null, "Obiettivi"), await goalsView(S.me.id, null)]; };

/* --- profilo (tutti) --- */
VIEWS.profilo = async function () {
  return [
    h("h1", null, "Profilo"),
    h("div", { class: "card" },
      h("div", { class: "eyebrow" }, S.me.role === "admin" ? "Amministratore" : "Cliente"),
      h("h2", null, S.me.full_name || S.me.username),
      h("div", { class: "small muted" }, "Username: " + S.me.username)),
    h("div", { class: "card" },
      h("h3", null, "Cambia password"),
      field("Nuova password (min. 8 caratteri)", "pf_1", "password", "", { autocomplete: "new-password" }),
      field("Ripeti nuova password", "pf_2", "password", "", { autocomplete: "new-password" }),
      h("button", { class: "btn block", onclick: async function () {
        var a = $("#pf_1").value, b = $("#pf_2").value;
        if (a.length < 8) return toast("Almeno 8 caratteri");
        if (a !== b) return toast("Le password non coincidono");
        var r = await sb.auth.updateUser({ password: a });
        if (r.error) return fail(r.error);
        $("#pf_1").value = $("#pf_2").value = ""; toast("Password aggiornata");
      } }, "Aggiorna password")),
    h("div", { class: "card install small" },
      h("h3", null, "Installa l'app sul telefono"),
      h("p", null, h("strong", null, "iPhone: "), "apri questa pagina in Safari, tocca Condividi e poi “Aggiungi alla schermata Home”."),
      h("p", null, h("strong", null, "Android: "), "apri in Chrome, tocca il menu ⋮ e poi “Installa app” o “Aggiungi a schermata Home”.")),
    h("button", { class: "btn ghost block", onclick: logout }, "Esci")
  ];
};

/* ---------- avvio ---------- */
sb.auth.onAuthStateChange(function (ev) { if (ev === "SIGNED_OUT" && S.me) { S.me = null; renderLogin(); } });
if ("serviceWorker" in navigator) window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
boot();
