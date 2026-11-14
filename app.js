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
function confirmDo(msg, fn, label) {
  var m = h("div", { class: "modal", style: "z-index:60;align-items:center" },
    h("div", { class: "sheet", style: "max-width:420px;border-radius:22px" },
      h("p", { style: "margin-top:0" }, msg),
      h("div", { class: "row", style: "justify-content:flex-end;margin-top:14px" },
        h("button", { class: "btn ghost sm", onclick: function () { m.remove(); } }, "Annulla"),
        h("button", { class: "btn sm", style: "background:#A0524F", onclick: function () { m.remove(); fn(); } }, label || "Elimina"))));
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
  S.view = null;
  if (/[?&]v=notifiche/.test(location.search)) { S.view = { name: "notifiche" }; try { history.replaceState(null, "", location.pathname); } catch (e) { /* niente */ } }
  render();
  syncPush(false).catch(function () {});
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
async function logout() { await unregisterPush(); S.pushOk = false; await sb.auth.signOut(); S.user = S.me = null; renderLogin(); }

/* ---------- shell ---------- */
var ADMIN_TABS = [["clienti", "Clienti", "♡"], ["agenda", "Agenda", "◷"], ["esercizi", "Esercizi", "◇"], ["scadenze", "Scadenze", "€"], ["profilo", "Profilo", "○"]];
var CLIENT_TABS = [["allenamento", "Allenati", "♡"], ["lezioni", "Lezioni", "◷"], ["progressi", "Progressi", "↗"], ["obiettivi", "Obiettivi", "◇"], ["profilo", "Profilo", "○"]];
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
    h("div", { class: "topr" }, h("span", { class: "small muted" }, S.me.full_name || S.me.username), bellBtn())));
  updateBell();
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
      h("div", null, h("div", null, s.plan_name), h("div", { class: "small muted" }, fmtDate(s.start_date) + " → " + fmtDate(s.end_date) + " · " + euro(s.price_eur) + (s.lessons_included ? " · " + s.lessons_included + " lezioni" : ""))),
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
    h("div", { class: "grid2" }, field("Prezzo (€)", "sb_p", "text", s.price_eur, { inputmode: "decimal" }),
      field("Lezioni incluse", "sb_l", "number", s.lessons_included, { inputmode: "numeric", placeholder: "vuoto = illimitate" })),
    h("div", { class: "small muted" }, "Le lezioni prenotate nel periodo dell'abbonamento vengono scalate da qui. Lascia vuoto per lezioni illimitate."),
    h("div", { class: "grid2" }, field("Inizio", "sb_s", "date", s.start_date || today()), field("Fine", "sb_e", "date", s.end_date)),
    field("Note", "sb_x", "textarea", s.notes),
    s.id ? null : h("label", { style: "display:flex;gap:8px;align-items:center;text-transform:none;letter-spacing:0;font-size:.9rem" },
      h("input", { type: "checkbox", id: "sb_pay", checked: true, style: "width:auto" }), "Crea anche il pagamento da incassare"),
    s.id ? h("button", { class: "btn danger sm", style: "margin-top:16px", onclick: function () {
      confirmDo("Eliminare questo abbonamento?", async function () { try { await q(sb.from("subscriptions").delete().eq("id", s.id)); document.querySelector(".modal").remove(); reloadClient(c, "pagamenti"); } catch (e) { fail(e); } });
    } }, "Elimina") : null
  ], async function () {
    var row = { client_id: c.id, plan_name: val("sb_n"), price_eur: num("sb_p"), lessons_included: num("sb_l"), start_date: val("sb_s"), end_date: val("sb_e"), notes: val("sb_x") };
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
    select("Metodo", "py_m", [["", "—"], ["Contanti", "Contanti"], ["Carta", "Carta"], ["Bonifico", "Bonifico"], ["POS", "POS / carta"], ["Satispay", "Satispay"], ["PayPal", "PayPal"]], p.method || ""),
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


/* =================== PRENOTAZIONI LEZIONI =================== */
var VAPID_PUBLIC = "BEFPpyDprJp7yhUPEjmkGPbQM2FgyWpPfeGDm47gzmthF3ZMI2Rt9vhTP72jAEP2bhOzOMbsLdij0FqVAlYQevY";
var TZ = "Europe/Rome";
var WD = ["Lu", "Ma", "Me", "Gi", "Ve", "Sa", "Do"];
var WDL = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
var MODE = { presenza: "In presenza", online: "Online" };
var PAYM = { abbonamento: "Inclusa nell'abbonamento", contanti: "Contanti dopo la lezione", carta: "Carta dopo la lezione" };
var CARD_MSG = "Hai scelto di pagare con carta: a breve ti contatteremo per guidarti passo passo nel pagamento.";
var dayFmt = new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" });
function romeDay(ts) { return dayFmt.format(new Date(ts)); }
function romeHM(ts) { return new Date(ts).toLocaleTimeString("it-IT", { timeZone: TZ, hour: "2-digit", minute: "2-digit" }); }
function romeHour(ts) { return Number(romeHM(ts).slice(0, 2)); }
function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function longDay(ts) { return cap(new Date(ts).toLocaleDateString("it-IT", { timeZone: TZ, weekday: "long", day: "numeric", month: "long" })); }
function dayLabel(day) { return cap(new Date(day + "T12:00:00Z").toLocaleDateString("it-IT", { timeZone: "UTC", weekday: "long", day: "numeric", month: "long" })); }
function slotLabel(ts) { return longDay(ts) + " alle " + romeHM(ts); }
function pad2(n) { return (n < 10 ? "0" : "") + n; }
function romeTs(day, hour) { return day + " " + pad2(hour) + ":00:00 " + TZ; }
function addDays(day, n) { var d = new Date(day + "T12:00:00Z"); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }
function isoWeekday(day) { var w = new Date(day + "T12:00:00Z").getUTCDay(); return w === 0 ? 7 : w; }
function weekStartOf(day) { return addDays(day, 1 - isoWeekday(day)); }
function hm(t) { return t ? String(t).slice(0, 5) : ""; }
function hourOpts(a, b) { var o = []; for (var i = a; i <= b; i++) o.push([pad2(i) + ":00", pad2(i) + ":00"]); return o; }
function whenAgo(ts) { return new Date(ts).toLocaleString("it-IT", { timeZone: TZ, day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }).replace(",", " ·"); }
function waNum(p) { var d = String(p || "").replace(/\D/g, ""); if (d.indexOf("00") === 0) d = d.slice(2); if (d.length === 10) d = "39" + d; return d; }
function coverSub(ctx, day) {
  return (ctx.subscriptions || []).filter(function (s) {
    return s.start_date <= day && (!s.end_date || s.end_date >= day) && (s.lessons_included === null || s.used < s.lessons_included);
  }).sort(function (a, b) { return (a.end_date || "9999") < (b.end_date || "9999") ? -1 : 1; })[0] || null;
}

/* --- notifiche in app + push --- */
async function updateBell() {
  if (!S.me) return;
  var r = await sb.from("notifications").select("id", { count: "exact", head: true }).eq("user_id", S.me.id).is("read_at", null);
  var b = document.getElementById("bellc"); if (!b) return;
  var n = r.count || 0; b.textContent = n > 9 ? "9+" : String(n); b.style.display = n ? "" : "none";
}
function bellBtn() {
  return h("button", { class: "bell", "aria-label": "Notifiche", onclick: function () { openView({ name: "notifiche" }); },
    html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg><span class="n" id="bellc" style="display:none"></span>' });
}
VIEWS.notifiche = async function () {
  var ns = await q(sb.from("notifications").select("*").eq("user_id", S.me.id).order("created_at", { ascending: false }).limit(50));
  var unread = ns.filter(function (n) { return !n.read_at; }).map(function (n) { return n.id; });
  if (unread.length) sb.from("notifications").update({ read_at: new Date().toISOString() }).in("id", unread).then(updateBell);
  return [
    h("div", { class: "row" }, h("h1", null, "Notifiche"),
      ns.length ? h("button", { class: "link small", onclick: function () {
        confirmDo("Cancellare tutte le notifiche?", async function () {
          try { await q(sb.from("notifications").delete().eq("user_id", S.me.id)); render(); } catch (e) { fail(e); }
        }, "Cancella");
      } }, "Cancella tutte") : null),
    pushCard(),
    ns.length ? h("div", { class: "card list" }, ns.map(function (n) {
      return h("div", { class: "item" + (n.read_at ? "" : " unread"), onclick: function () { openNotif(n); } },
        h("div", null, h("div", { class: "nt" }, n.title), n.body ? h("div", { class: "small" }, n.body) : null,
          h("div", { class: "small muted", style: "margin-top:2px" }, whenAgo(n.created_at))),
        n.read_at ? h("span", { class: "muted" }, "›") : h("span", { class: "dot" }));
    })) : h("div", { class: "card empty" }, "Nessuna notifica.")
  ];
};
async function openNotif(n) {
  if (S.me.role === "admin") { S.agSub = "agenda"; if (n.booking_at) S.agWeek = weekStartOf(romeDay(n.booking_at)); return go("agenda"); }
  if (n.kind === "posto_libero" && n.booking_at && new Date(n.booking_at) > new Date()) {
    var qe = await sb.from("booking_queue").select("mode").eq("client_id", S.me.id).eq("starts_at", n.booking_at).maybeSingle();
    return prenotaDa(n.booking_at, qe.data ? qe.data.mode : null);
  }
  go("lezioni");
}
function isIOS() { return /iPhone|iPad|iPod/.test(navigator.userAgent); }
function isStandalone() { return window.navigator.standalone === true || (window.matchMedia && matchMedia("(display-mode: standalone)").matches); }
function pushState() {
  var ok = "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;
  if (!ok) return isIOS() && !isStandalone() ? "install" : "unsupported";
  if (Notification.permission === "denied") return "denied";
  if (Notification.permission === "granted" && S.pushOk) return "on";
  return "off";
}
function b64u(s) { var p = "=".repeat((4 - s.length % 4) % 4); var r = atob((s + p).replace(/-/g, "+").replace(/_/g, "/")); var a = new Uint8Array(r.length); for (var i = 0; i < r.length; i++) a[i] = r.charCodeAt(i); return a; }
async function syncPush(ask) {
  if (pushState() === "install" || pushState() === "unsupported") return false;
  if (ask) { var perm = await Notification.requestPermission(); if (perm !== "granted") return false; }
  else if (Notification.permission !== "granted") return false;
  var reg = await navigator.serviceWorker.ready;
  var sub = await reg.pushManager.getSubscription();
  if (!sub) sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64u(VAPID_PUBLIC) });
  var j = sub.toJSON();
  await q(sb.rpc("register_push", { p_endpoint: j.endpoint, p_p256dh: j.keys.p256dh, p_auth: j.keys.auth, p_ua: navigator.userAgent }));
  S.pushOk = true; return true;
}
async function unregisterPush() {
  try {
    if (!("serviceWorker" in navigator) || !("PushManager" in window)) return;
    var reg = await navigator.serviceWorker.ready; var sub = await reg.pushManager.getSubscription();
    if (sub) await sb.rpc("unregister_push", { p_endpoint: sub.endpoint });
  } catch (e) { /* niente */ }
}
function pushCard(showOn) {
  var st = pushState();
  if (st === "unsupported" || (st === "on" && !showOn)) return null;
  if (st === "on") return h("div", { class: "card small" }, h("h3", null, "Notifiche"), h("p", { style: "margin:0" }, "Attive su questo telefono ✓"),
    S.me.role === "admin" ? h("button", { class: "btn ghost sm", style: "margin-top:10px", onclick: async function () {
      try { await q(sb.from("notifications").insert({ user_id: S.me.id, kind: "info", title: "Notifica di prova", body: "Se leggi questo messaggio, le notifiche funzionano." })); toast("Inviata: arriva tra pochi secondi"); } catch (e) { fail(e); }
    } }, "Invia una notifica di prova") : null);
  var txt = { off: "Attiva le notifiche: ti avvisiamo quando si libera un posto, quando una lezione viene spostata e il giorno prima della lezione.",
    install: "Per ricevere le notifiche aggiungi l'app alla schermata Home (istruzioni in Profilo) e aprila da lì.",
    denied: "Le notifiche sono bloccate su questo telefono. Puoi riattivarle da Impostazioni → Notifiche → LR Training." }[st];
  if (S.me.role === "admin" && st === "off") txt = "Attiva le notifiche per sapere subito quando una cliente prenota o disdice.";
  return h("div", { class: "card freed small" }, h("p", { style: "margin:0" }, txt),
    st === "off" ? h("button", { class: "btn sm", style: "margin-top:10px", onclick: async function (e) {
      e.target.disabled = true;
      try { if (await syncPush(true)) { toast("Notifiche attivate"); render(); } else { toast("Notifiche non autorizzate"); e.target.disabled = false; } }
      catch (er) { fail(er); e.target.disabled = false; }
    } }, "Attiva notifiche") : null);
}

/* --- cliente: le mie lezioni --- */
VIEWS.lezioni = async function () {
  var nowIso = new Date().toISOString();
  var r = await Promise.all([
    q(sb.from("bookings").select("*").eq("client_id", S.me.id).eq("status", "confermata").gte("starts_at", new Date(Date.now() - 3600e3).toISOString()).order("starts_at")),
    q(sb.from("booking_queue").select("*").eq("client_id", S.me.id).gt("starts_at", nowIso).order("starts_at")),
    q(sb.rpc("booking_context")),
    q(sb.from("bookings").select("*").eq("client_id", S.me.id).eq("status", "confermata").lt("starts_at", new Date(Date.now() - 3600e3).toISOString()).order("starts_at", { ascending: false }).limit(5))
  ]);
  var bks = r[0], queue = r[1], ctx = r[2], past = r[3];
  var full = ctx.active_count >= ctx.max_active;
  var freed = queue.filter(function (x) { return x.notified_at; });
  return [
    h("h1", null, "Lezioni"),
    freed.map(function (x) {
      return h("div", { class: "card freed" }, h("div", { class: "eyebrow" }, "Si è liberato un posto"),
        h("h3", null, slotLabel(x.starts_at)), h("div", { class: "small muted" }, MODE[x.mode]),
        h("button", { class: "btn block", onclick: function () { prenotaDa(x.starts_at, x.mode); } }, "Prenota ora"));
    }),
    h("button", { class: "btn block", style: "margin:0 0 14px", disabled: full ? true : null, onclick: function () { S.bk = null; openView({ name: "prenota" }); } }, "Prenota una lezione"),
    full ? h("p", { class: "small muted", style: "margin-top:-6px" }, "Hai già " + ctx.active_count + " lezioni prenotate, il massimo consentito. Potrai prenotarne un'altra dopo la prossima lezione.") : null,
    pushCard(),
    h("h2", null, "Prossime lezioni"),
    bks.length ? bks.map(function (b) { return myBookingCard(b, ctx); }) : h("div", { class: "card empty" }, "Nessuna lezione in programma."),
    queue.length ? [h("h2", null, "In coda"), h("div", { class: "card list" }, queue.map(function (x) {
      return h("div", { class: "item", style: "cursor:default" },
        h("div", null, h("div", null, slotLabel(x.starts_at)), h("div", { class: "small muted" }, MODE[x.mode] + (x.notified_at ? " · posto libero!" : " · ti avvisiamo se si libera"))),
        h("button", { class: "link small", onclick: async function () {
          try { await q(sb.rpc("leave_queue", { p_starts_at: x.starts_at })); toast("Sei uscita dalla coda"); render(); } catch (e) { fail(e); }
        } }, "Esci"));
    }))] : null,
    past.length ? [h("h2", null, "Ultime lezioni"), h("div", { class: "card list" }, past.map(function (b) {
      return h("div", { class: "item", style: "cursor:default" }, h("div", null, h("div", null, slotLabel(b.starts_at)), h("div", { class: "small muted" }, MODE[b.mode])), h("span", { class: "pill off" }, "svolta"));
    }))] : null
  ];
};
function myBookingCard(b, ctx) {
  var started = new Date(b.starts_at) <= new Date();
  return h("div", { class: "card" },
    h("div", { class: "row" },
      h("div", null, h("div", { class: "eyebrow" }, MODE[b.mode]), h("h3", { style: "margin:0" }, longDay(b.starts_at)),
        h("div", { class: "small muted" }, "dalle " + romeHM(b.starts_at) + " alle " + pad2(romeHour(b.starts_at) + 1) + ":00")),
      h("span", { class: "pill" + (b.payment_method === "abbonamento" ? " ok" : "") }, b.payment_method === "abbonamento" ? "abbonamento" : b.payment_method)),
    b.mode === "online" ? (b.meet_link ? h("a", { class: "btn block", href: b.meet_link, target: "_blank", rel: "noopener" }, "Entra nella lezione su Meet")
      : h("div", { class: "small muted", style: "margin-top:10px" }, "Il link della videochiamata comparirà qui prima della lezione."))
      : (ctx.gym_address ? h("div", { class: "small muted", style: "margin-top:10px" }, "Dove: " + ctx.gym_address) : null),
    b.payment_method === "carta" ? h("div", { class: "tip" }, CARD_MSG) : null,
    b.payment_method === "contanti" ? h("div", { class: "small muted", style: "margin-top:6px" }, "Pagamento in contanti dopo la lezione.") : null,
    started ? null : h("button", { class: "link small", style: "margin-top:12px", onclick: function () {
      confirmDo("Vuoi disdire la lezione di " + slotLabel(b.starts_at) + "?" + (b.payment_method === "abbonamento" ? " La lezione torna disponibile nel tuo abbonamento." : ""), async function () {
        try { await q(sb.rpc("cancel_booking", { p_id: b.id })); toast("Lezione disdetta"); render(); } catch (e) { fail(e); }
      }, "Disdici");
    } }, "Disdici lezione"));
}
function prenotaDa(ts, mode) {
  var d = romeDay(ts);
  S.bk = { mode: mode || null, day: d, ym: d.slice(0, 7), slot: ts, pay: null };
  S.tab = "lezioni"; openView({ name: "prenota" });
}

/* --- cliente: prenota (tipo → giorno → ora → pagamento) --- */
VIEWS.prenota = async function () {
  var bk = S.bk || (S.bk = {});
  var tday = romeDay(new Date());
  if (!bk.ym) bk.ym = (bk.day || tday).slice(0, 7);
  var ctx = await q(sb.rpc("booking_context"));
  var box = h("div"), byDay = {}, loaded = null;
  async function load() {
    var y = +bk.ym.slice(0, 4), m = +bk.ym.slice(5, 7);
    var first = bk.ym + "-01", last = addDays(new Date(Date.UTC(y, m, 1, 12)).toISOString().slice(0, 10), -1);
    byDay = {};
    if (last >= tday) {
      var slots = await q(sb.rpc("get_slots", { p_from: first < tday ? tday : first, p_to: last }));
      slots.forEach(function (s) { var k = romeDay(s.starts_at); (byDay[k] = byDay[k] || []).push(s); });
    }
    loaded = bk.ym;
  }
  async function draw() {
    if (loaded !== bk.ym) { box.innerHTML = ""; box.appendChild(h("div", { class: "empty" }, "Caricamento…")); try { await load(); } catch (e) { fail(e); } }
    box.innerHTML = ""; add(box, build());
  }
  function price(mode) { var p = mode === "online" ? ctx.price_online : ctx.price_presenza; return p === null || p === undefined ? null : euro(p); }
  function build() {
    var out = [];
    out.push(h("div", { class: "card" }, h("div", { class: "eyebrow" }, "1 · Tipo di lezione"),
      h("div", { class: "opts" }, ["presenza", "online"].map(function (md) {
        return h("button", { class: "opt" + (bk.mode === md ? " on" : ""), onclick: function () { bk.mode = md; draw(); } },
          h("strong", null, MODE[md]), h("span", null, (md === "online" ? "Videochiamata Google Meet" : "In palestra") + " · 60 minuti"),
          price(md) ? h("span", { class: "pr" }, price(md)) : null);
      }))));
    if (!bk.mode) return out;
    // calendario
    var y = +bk.ym.slice(0, 4), m = +bk.ym.slice(5, 7);
    var first = bk.ym + "-01", nDays = new Date(Date.UTC(y, m, 0)).getUTCDate();
    var cal = h("div", { class: "cal" }, WD.map(function (w) { return h("div", { class: "wd" }, w); }));
    for (var i = 1; i < isoWeekday(first); i++) cal.appendChild(h("div"));
    for (var dd = 1; dd <= nDays; dd++) (function (dd) {
      var key = bk.ym + "-" + pad2(dd), sl = byDay[key] || [];
      var free = sl.some(function (s) { return s.state === "libero"; });
      var cls = "d" + (key === tday ? " today" : "") + (bk.day === key ? " sel" : "") + (sl.length && !free ? " full" : "");
      cal.appendChild(h("button", { class: cls, disabled: (key < tday || !sl.length) ? true : null, onclick: function () { bk.day = key; bk.slot = null; draw(); } }, String(dd)));
    })(dd);
    var prevYm = new Date(Date.UTC(y, m - 2, 1, 12)).toISOString().slice(0, 7), nextYm = new Date(Date.UTC(y, m, 1, 12)).toISOString().slice(0, 7);
    out.push(h("div", { class: "card" }, h("div", { class: "eyebrow" }, "2 · Giorno"),
      h("div", { class: "calhead" },
        h("button", { class: "calnav", disabled: prevYm < tday.slice(0, 7) ? true : null, onclick: function () { bk.ym = prevYm; draw(); } }, "‹"),
        h("b", null, new Date(Date.UTC(y, m - 1, 1, 12)).toLocaleDateString("it-IT", { month: "long", year: "numeric", timeZone: "UTC" })),
        h("button", { class: "calnav", onclick: function () { bk.ym = nextYm; draw(); } }, "›")),
      cal,
      h("div", { class: "legend" }, h("span", null, h("i", { style: "background:#C0635E" }), "Completo"), h("span", null, h("i", { style: "border:1px solid var(--rose-l)" }), "Oggi"), h("span", null, h("i", { style: "background:var(--rose)" }), "Selezionato"))));
    if (!bk.day || bk.day.slice(0, 7) !== bk.ym) return out;
    // orari
    var sl = byDay[bk.day] || [];
    if (bk.slot && !sl.some(function (s) { return s.starts_at === bk.slot || new Date(s.starts_at).getTime() === new Date(bk.slot).getTime(); })) bk.slot = null;
    if (bk.slot) sl.forEach(function (s) { if (new Date(s.starts_at).getTime() === new Date(bk.slot).getTime()) { bk.slot = s.starts_at; if (s.state !== "libero") bk.slot = null; } });
    var slotBtn = function (s) {
      var t = romeHM(s.starts_at);
      if (s.state === "mia") return h("div", { class: "slot mine" }, t, h("small", null, "la tua lezione"));
      if (s.state === "occupato") return h("div", { class: "slot full" }, h("span", { class: "t" }, t), h("small", null, "occupato"),
        h("button", { class: "q", onclick: async function () {
          try {
            if (s.in_queue) { await q(sb.rpc("leave_queue", { p_starts_at: s.starts_at })); s.in_queue = false; toast("Sei uscita dalla coda"); }
            else { await q(sb.rpc("join_queue", { p_starts_at: s.starts_at, p_mode: bk.mode })); s.in_queue = true; toast("Sei in coda: ti avvisiamo se si libera"); }
            draw();
          } catch (e) { fail(e); }
        } }, s.in_queue ? "In coda ✓" : "Mettiti in coda"));
      return h("button", { class: "slot" + (bk.slot === s.starts_at ? " on" : ""), onclick: function () { bk.slot = s.starts_at; draw(); setTimeout(function () { var c = document.getElementById("bk_pay"); if (c) c.scrollIntoView({ behavior: "smooth", block: "start" }); }, 50); } }, t);
    };
    var morning = sl.filter(function (s) { return romeHour(s.starts_at) < 13; }), afternoon = sl.filter(function (s) { return romeHour(s.starts_at) >= 13; });
    out.push(h("div", { class: "card" }, h("div", { class: "eyebrow" }, "3 · Orario"), h("h3", null, dayLabel(bk.day)),
      morning.length ? [h("div", { class: "small muted", style: "margin:4px 0 8px" }, "Mattina"), h("div", { class: "slots" }, morning.map(slotBtn))] : null,
      afternoon.length ? [h("div", { class: "small muted", style: "margin:14px 0 8px" }, "Pomeriggio"), h("div", { class: "slots" }, afternoon.map(slotBtn))] : null,
      sl.some(function (s) { return s.state === "libero"; }) ? null : h("p", { class: "small muted", style: "margin-bottom:0" }, "Giorno al completo: mettiti in coda su un orario e ti avvisiamo appena si libera.")));
    if (!bk.slot) return out;
    // pagamento
    var sub = coverSub(ctx, bk.day);
    var payBox;
    if (sub) {
      bk.pay = "abbonamento";
      payBox = h("div", { class: "tip" }, "Lezione inclusa nel tuo abbonamento «" + sub.plan_name + "»" +
        (sub.lessons_included !== null ? ": dopo questa ti restano " + (sub.lessons_included - sub.used - 1) + " lezioni." : "."));
    } else {
      if (bk.pay === "abbonamento") bk.pay = null;
      payBox = [h("div", { class: "opts" }, [["contanti", "Contanti", "Dopo la lezione"], ["carta", "Carta", "Dopo la lezione"]].map(function (p) {
          return h("button", { class: "opt" + (bk.pay === p[0] ? " on" : ""), onclick: function () { bk.pay = p[0]; draw(); } }, h("strong", null, p[1]), h("span", null, p[2]));
        })),
        price(bk.mode) ? h("div", { class: "small muted", style: "margin-top:10px" }, "Importo: " + price(bk.mode)) : null,
        bk.pay === "carta" ? h("div", { class: "tip" }, CARD_MSG) : null];
    }
    out.push(h("div", { class: "card", id: "bk_pay" }, h("div", { class: "eyebrow" }, "4 · Pagamento"), payBox));
    out.push(h("div", { class: "card summary" },
      h("div", { class: "eyebrow" }, "Riepilogo"),
      h("h3", { style: "margin:0" }, slotLabel(bk.slot)),
      h("div", { class: "small muted" }, MODE[bk.mode] + " · 60 minuti" + (bk.pay ? " · " + PAYM[bk.pay].toLowerCase() : "")),
      h("button", { class: "btn block", disabled: bk.pay ? null : true, onclick: async function (e) {
        e.target.disabled = true;
        try {
          await q(sb.rpc("book_lesson", { p_starts_at: bk.slot, p_mode: bk.mode, p_payment: bk.pay === "abbonamento" ? null : bk.pay }));
          S.bk = null; toast("Lezione prenotata!"); go("lezioni");
        } catch (er) { fail(er); loaded = null; bk.slot = null; draw(); }
      } }, "Conferma prenotazione")));
    return out;
  }
  await draw();
  return [h("button", { class: "back", onclick: function () { S.bk = null; go("lezioni"); } }, "‹ Le mie lezioni"), h("h1", null, "Prenota una lezione"), box];
};

/* --- admin: agenda --- */
VIEWS.agenda = async function () {
  var sub = S.agSub || "agenda";
  var subs = [["agenda", "Lezioni"], ["orari", "Orari"], ["impostazioni", "Impostazioni"]];
  var content = await AG[sub]();
  return [
    h("div", { class: "row" }, h("h1", null, "Agenda"), sub === "agenda" ? h("button", { class: "btn sm", onclick: adminBook }, "+ Prenota") : null),
    pushCard(),
    h("div", { class: "subnav" }, subs.map(function (s) { return h("button", { class: sub === s[0] ? "on" : "", onclick: function () { S.agSub = s[0]; render(); } }, s[1]); })),
    content
  ];
};
var AG = {};
AG.agenda = async function () {
  var tday = romeDay(new Date());
  var ws = S.agWeek || weekStartOf(tday), we = addDays(ws, 7);
  var r = await Promise.all([
    q(sb.from("bookings").select("*, profiles!bookings_client_id_fkey(full_name, username, phone), payments(status, amount_eur)").eq("status", "confermata").gte("starts_at", romeTs(ws, 0)).lt("starts_at", romeTs(we, 0)).order("starts_at")),
    q(sb.from("booking_queue").select("starts_at, mode, profiles(full_name, username)").gte("starts_at", romeTs(ws, 0)).lt("starts_at", romeTs(we, 0))),
    addDays(ws, 6) >= tday ? q(sb.rpc("get_slots", { p_from: ws < tday ? tday : ws, p_to: addDays(ws, 6) })) : []
  ]);
  var bks = r[0], queue = r[1], slots = r[2];
  var nm = function (p) { return p ? (p.full_name || p.username) : ""; };
  var days = [];
  for (var i = 0; i < 7; i++) days.push(addDays(ws, i));
  return [
    h("div", { class: "row", style: "margin-bottom:10px" },
      h("button", { class: "calnav", onclick: function () { S.agWeek = addDays(ws, -7); render(); } }, "‹"),
      h("div", { style: "text-align:center" }, h("div", { class: "dayh", style: "margin:0" }, new Date(ws + "T12:00:00Z").toLocaleDateString("it-IT", { day: "numeric", month: "short", timeZone: "UTC" }) + " – " + new Date(addDays(ws, 6) + "T12:00:00Z").toLocaleDateString("it-IT", { day: "numeric", month: "short", timeZone: "UTC" })),
        ws !== weekStartOf(tday) ? h("button", { class: "link small", onclick: function () { S.agWeek = null; render(); } }, "torna a oggi") : null),
      h("button", { class: "calnav", onclick: function () { S.agWeek = addDays(ws, 7); render(); } }, "›")),
    days.map(function (d) {
      var db = bks.filter(function (b) { return romeDay(b.starts_at) === d; });
      var free = slots.filter(function (s) { return romeDay(s.starts_at) === d && s.state === "libero"; }).length;
      var anySlots = slots.some(function (s) { return romeDay(s.starts_at) === d; });
      var info = d < tday ? "" : (anySlots ? (free ? free + (free === 1 ? " ora libera" : " ore libere") : "al completo") : (d === tday ? "" : "chiuso"));
      return h("div", { class: "card" + (d === tday ? " today" : "") },
        h("div", { class: "row" }, h("h3", { style: "margin:0" }, dayLabel(d)), h("span", { class: "small muted" }, info)),
        db.length ? h("div", { class: "list" }, db.map(function (b) {
          var qn = queue.filter(function (x) { return x.starts_at === b.starts_at || new Date(x.starts_at).getTime() === new Date(b.starts_at).getTime(); }).length;
          var pay = b.payment_method === "abbonamento" ? h("span", { class: "pill ok" }, "abbonamento")
            : (b.payments && b.payments.status === "pagato" ? h("span", { class: "pill ok" }, "pagata") : h("span", { class: "pill warn" }, b.payment_method === "carta" ? "carta · da contattare" : "contanti"));
          return h("div", { class: "item", onclick: function () { bookingModal(b, qn); } },
            h("div", { class: "time" }, romeHM(b.starts_at)),
            h("div", { style: "flex:1" }, h("div", null, nm(b.profiles)),
              h("div", { class: "chips" }, h("span", { class: "pill" }, MODE[b.mode]), pay,
                b.mode === "online" && !b.meet_link ? h("span", { class: "pill warn" }, "link Meet mancante") : null,
                qn ? h("span", { class: "pill off" }, qn + " in coda") : null)),
            h("span", { class: "muted" }, "›"));
        })) : h("div", { class: "small muted", style: "margin-top:6px" }, "Nessuna lezione."));
    })
  ];
};
function bookingModal(b, qn) {
  var p = b.profiles || {};
  var m = modal(p.full_name || p.username, [
    h("p", { style: "margin-top:0" }, slotLabel(b.starts_at), h("br"), h("span", { class: "muted" }, MODE[b.mode] + " · " + PAYM[b.payment_method] +
      (b.payments ? " · " + euro(b.payments.amount_eur) + " · " + PAY_ST[b.payments.status][0].toLowerCase() : ""))),
    qn ? h("p", { class: "small muted" }, qn + (qn === 1 ? " persona in coda" : " persone in coda") + " per quest'ora: se annulli o sposti, vengono avvisate.") : null,
    b.payment_method === "carta" ? h("div", { class: "tip" }, "Ha scelto di pagare con carta: va contattata per il pagamento.") : null,
    p.phone ? h("p", { class: "small" }, h("a", { href: "https://wa.me/" + waNum(p.phone), target: "_blank", rel: "noopener" }, "Scrivi su WhatsApp (" + p.phone + ")")) : null,
    b.mode === "online" ? [field("Link Google Meet", "bk_link", "url", b.meet_link, { placeholder: "https://meet.google.com/…" }),
      h("a", { class: "small", href: "https://meet.google.com/new", target: "_blank", rel: "noopener" }, "Crea un nuovo link Meet")] : null,
    h("div", { class: "row", style: "flex-wrap:wrap;justify-content:flex-start;gap:8px;margin-top:18px" },
      b.payments && b.payments.status === "da_pagare" ? h("button", { class: "btn ghost sm", onclick: async function () {
        try { await q(sb.from("payments").update({ status: "pagato", paid_on: today() }).eq("id", b.payment_id)); m.remove(); toast("Segnata come pagata"); render(); } catch (e) { fail(e); }
      } }, "Segna pagata") : null,
      h("button", { class: "btn ghost sm", onclick: function () { m.remove(); moveModal(b); } }, "Sposta"),
      h("button", { class: "btn danger sm", onclick: function () { m.remove(); cancelModal(b); } }, "Annulla lezione"))
  ], b.mode === "online" ? async function () {
    var l = val("bk_link");
    if (l && !/^https?:\/\//i.test(l)) { toast("Il link deve iniziare con https://"); return false; }
    await q(sb.from("bookings").update({ meet_link: l }).eq("id", b.id));
    toast(l ? "Link salvato: la cliente riceve un avviso" : "Link rimosso"); render();
  } : null, "Salva link");
}
function cancelModal(b) {
  var p = b.profiles || {};
  modal("Annullare la lezione?", [
    h("p", { style: "margin-top:0" }, (p.full_name || p.username) + " · " + slotLabel(b.starts_at)),
    field("Motivo (facoltativo, lo legge la cliente)", "ca_r", "text", "", { placeholder: "es. imprevisto, recuperiamo la prossima settimana" }),
    h("p", { class: "small muted" }, "La cliente riceve una notifica. " + (b.payment_method === "abbonamento" ? "La lezione torna disponibile nel suo abbonamento." : "Il pagamento previsto viene annullato."))
  ], async function () {
    await q(sb.rpc("cancel_booking", { p_id: b.id, p_reason: val("ca_r") }));
    toast("Lezione annullata"); render();
  }, "Annulla lezione");
}
function moveModal(b) {
  modal("Sposta lezione", [
    h("p", { class: "small muted", style: "margin-top:0" }, "Ora: " + slotLabel(b.starts_at)),
    h("div", { class: "grid2" }, field("Nuovo giorno", "mv_d", "date", romeDay(b.starts_at)), select("Ora", "mv_h", hourOpts(6, 21).map(function (o) { return [String(+o[0].slice(0, 2)), o[1]]; }), String(romeHour(b.starts_at)))),
    h("p", { class: "small muted" }, "Puoi scegliere anche un orario fuori dalle tue fasce. La cliente riceve una notifica.")
  ], async function () {
    if (!val("mv_d")) { toast("Scegli il giorno"); return false; }
    await q(sb.rpc("move_booking", { p_id: b.id, p_new: romeTs(val("mv_d"), +$("#mv_h").value) }));
    toast("Lezione spostata"); S.agWeek = weekStartOf(val("mv_d")); render();
  }, "Sposta");
}
async function adminBook() {
  var cl = await q(sb.from("profiles").select("id, full_name, username").eq("role", "client").eq("active", true).order("full_name"));
  if (!cl.length) return toast("Nessun cliente attivo");
  modal("Prenota per una cliente", [
    select("Cliente", "ab_c", cl.map(function (c) { return [c.id, c.full_name || c.username]; }), cl[0].id),
    h("div", { class: "grid2" }, field("Giorno", "ab_d", "date", romeDay(new Date())), select("Ora", "ab_h", hourOpts(6, 21).map(function (o) { return [String(+o[0].slice(0, 2)), o[1]]; }), "9")),
    h("div", { class: "grid2" }, select("Tipo", "ab_m", [["presenza", "In presenza"], ["online", "Online"]], "presenza"), select("Pagamento", "ab_p", [["contanti", "Contanti"], ["carta", "Carta"]], "contanti")),
    h("p", { class: "small muted" }, "Se la cliente ha un abbonamento valido, la lezione viene scalata dall'abbonamento. Riceve una notifica.")
  ], async function () {
    if (!val("ab_d")) { toast("Scegli il giorno"); return false; }
    await q(sb.rpc("book_lesson", { p_starts_at: romeTs(val("ab_d"), +$("#ab_h").value), p_mode: $("#ab_m").value, p_payment: $("#ab_p").value, p_client: $("#ab_c").value }));
    toast("Lezione prenotata"); S.agWeek = weekStartOf(val("ab_d")); render();
  }, "Prenota");
}
AG.orari = async function () {
  var r = await Promise.all([
    q(sb.from("availability_weekly").select("*").order("weekday").order("start_time")),
    q(sb.from("availability_exceptions").select("*").gte("day", romeDay(new Date())).order("day").order("start_time"))
  ]);
  var wk = r[0], ex = r[1];
  var exDays = {}; ex.forEach(function (e) { (exDays[e.day] = exDays[e.day] || []).push(e); });
  return [
    h("div", { class: "card" }, h("h3", null, "Orario settimanale"),
      h("p", { class: "small muted", style: "margin-top:0" }, "Le fasce in cui le clienti possono prenotare. Ogni lezione dura un'ora: con 09:00–18:00 l'ultima lezione inizia alle 17:00."),
      h("div", { class: "list" }, WDL.map(function (d, i) {
        var rs = wk.filter(function (x) { return x.weekday === i + 1; });
        return h("div", { class: "item", style: "cursor:default" },
          h("div", null, h("div", null, d), h("div", { class: "chips" }, rs.length ? rs.map(function (x) {
            return h("span", { class: "chip" }, hm(x.start_time) + "–" + hm(x.end_time), h("button", { class: "x", "aria-label": "Togli", onclick: function () {
              confirmDo("Togliere la fascia " + hm(x.start_time) + "–" + hm(x.end_time) + " del " + d.toLowerCase() + "?", async function () {
                try { await q(sb.from("availability_weekly").delete().eq("id", x.id)); render(); } catch (e) { fail(e); }
              }, "Togli");
            } }, "×"));
          }) : h("span", { class: "small muted" }, "Chiuso"))),
          h("button", { class: "btn ghost sm", onclick: function () { rangeModal(i + 1, d); } }, "+ Fascia"));
      }))),
    h("div", { class: "card" }, h("div", { class: "row" }, h("h3", { style: "margin:0" }, "Giorni particolari"), h("button", { class: "btn sm", onclick: exceptionModal }, "+ Aggiungi")),
      h("p", { class: "small muted" }, "Per una data precisa puoi chiudere tutto il giorno o mettere un orario diverso (es. lunedì 17 solo 09–14). Vale solo per quel giorno e sostituisce l'orario settimanale."),
      Object.keys(exDays).length ? h("div", { class: "list" }, Object.keys(exDays).map(function (d) {
        var rs = exDays[d], closed = rs.some(function (x) { return !x.start_time; });
        return h("div", { class: "item", style: "cursor:default" },
          h("div", null, h("div", null, dayLabel(d)),
            h("div", { class: "chips" }, closed ? h("span", { class: "pill off" }, "chiuso") : rs.map(function (x) { return h("span", { class: "chip", style: "padding-right:10px" }, hm(x.start_time) + "–" + hm(x.end_time)); })),
            rs[0].note ? h("div", { class: "small muted" }, rs[0].note) : null),
          h("button", { class: "link small", onclick: function () {
            confirmDo("Togliere l'eccezione del " + dayLabel(d).toLowerCase() + "? Tornerà valido l'orario settimanale.", async function () {
              try { await q(sb.from("availability_exceptions").delete().eq("day", d)); render(); } catch (e) { fail(e); }
            }, "Togli");
          } }, "togli"));
      })) : h("div", { class: "small muted" }, "Nessun giorno particolare impostato."))
  ];
};
function rangeModal(wd, name) {
  modal("Nuova fascia · " + name, [
    h("div", { class: "grid2" }, select("Dalle", "rg_s", hourOpts(6, 22), "09:00"), select("Alle", "rg_e", hourOpts(7, 23), "18:00"))
  ], async function () {
    var s = $("#rg_s").value, e = $("#rg_e").value;
    if (e <= s) { toast("L'orario di fine deve essere dopo l'inizio"); return false; }
    await q(sb.from("availability_weekly").insert({ weekday: wd, start_time: s, end_time: e }));
    render();
  });
}
function exceptionModal() {
  var rangeBox = h("div", { class: "grid2" }, select("Dalle", "xe_s", hourOpts(6, 22), "09:00"), select("Alle", "xe_e", hourOpts(7, 23), "14:00"));
  modal("Giorno particolare", [
    field("Data", "xe_d", "date", romeDay(new Date())),
    select("Quel giorno", "xe_t", [["orario", "Orario diverso dal solito"], ["chiuso", "Chiuso tutto il giorno"]], "orario"),
    rangeBox,
    field("Nota (facoltativa, solo per te)", "xe_n", "text", "", { placeholder: "es. impegno nel pomeriggio" })
  ], async function () {
    var d = val("xe_d"), t = $("#xe_t").value, s = $("#xe_s").value, e = $("#xe_e").value;
    if (!d) { toast("Scegli la data"); return false; }
    if (t === "orario" && e <= s) { toast("L'orario di fine deve essere dopo l'inizio"); return false; }
    var cur = await q(sb.from("availability_exceptions").select("id, start_time").eq("day", d));
    if (t === "chiuso" || cur.some(function (x) { return !x.start_time; })) await q(sb.from("availability_exceptions").delete().eq("day", d));
    await q(sb.from("availability_exceptions").insert(t === "chiuso" ? { day: d, note: val("xe_n") } : { day: d, start_time: s, end_time: e, note: val("xe_n") }));
    var bk = await q(sb.from("bookings").select("starts_at").eq("status", "confermata").gte("starts_at", romeTs(d, 0)).lt("starts_at", romeTs(addDays(d, 1), 0)));
    var out = bk.filter(function (b) { var hh = romeHour(b.starts_at); return t === "chiuso" || hh < +s.slice(0, 2) || hh + 1 > +e.slice(0, 2); });
    if (out.length) toast("Attenzione: " + out.length + (out.length === 1 ? " lezione già prenotata" : " lezioni già prenotate") + " fuori dal nuovo orario. Spostale o annullale da Lezioni.");
    render();
  });
  var sync = function () { rangeBox.style.display = $("#xe_t").value === "chiuso" ? "none" : ""; };
  $("#xe_t").addEventListener("change", sync);
}
AG.impostazioni = async function () {
  var st = await q(sb.from("booking_settings").select("*").eq("id", 1).single());
  return h("div", { class: "card" },
    h("h3", null, "Prenotazioni"),
    h("div", { class: "grid2" }, field("Prezzo lezione in presenza (€)", "bs_pp", "text", st.price_presenza_eur, { inputmode: "decimal" }), field("Prezzo lezione online (€)", "bs_po", "text", st.price_online_eur, { inputmode: "decimal" })),
    h("p", { class: "small muted" }, "Il prezzo vale per chi non ha un abbonamento: alla prenotazione viene creato il pagamento da incassare (lo trovi in Scadenze)."),
    field("Lezioni prenotabili alla volta per cliente", "bs_max", "number", st.max_active_bookings, { inputmode: "numeric" }),
    field("Indirizzo della palestra (lo vede la cliente)", "bs_addr", "text", st.gym_address),
    h("button", { class: "btn block", onclick: async function () {
      try {
        await q(sb.from("booking_settings").update({ price_presenza_eur: num("bs_pp"), price_online_eur: num("bs_po"), max_active_bookings: num("bs_max") || 3, gym_address: val("bs_addr"), updated_at: new Date().toISOString() }).eq("id", 1));
        toast("Impostazioni salvate");
      } catch (e) { fail(e); }
    } }, "Salva"));
};

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
    pushCard(true),
    h("div", { class: "card install small" },
      h("h3", null, "Installa l'app sul telefono"),
      h("p", null, h("strong", null, "iPhone: "), "apri questa pagina in Safari, tocca Condividi e poi “Aggiungi alla schermata Home”."),
      h("p", null, h("strong", null, "Android: "), "apri in Chrome, tocca il menu ⋮ e poi “Installa app” o “Aggiungi a schermata Home”.")),
    h("button", { class: "btn ghost block", onclick: logout }, "Esci")
  ];
};

/* ---------- avvio ---------- */
sb.auth.onAuthStateChange(function (ev) { if (ev === "SIGNED_OUT" && S.me) { S.me = null; renderLogin(); } });
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  navigator.serviceWorker.addEventListener("message", function (e) {
    if (!S.me || !e.data) return;
    if (e.data.type === "notif") { updateBell(); if (S.tab === "lezioni" || S.tab === "agenda" || (S.view && S.view.name === "notifiche")) render(); }
    if (e.data.type === "open") openView({ name: "notifiche" });
  });
}
document.addEventListener("visibilitychange", function () { if (document.visibilityState === "visible" && S.me) updateBell(); });
boot();
