/* Lorena Rigoni · Personal Trainer — app clienti (PWA) */
var LOGO_SVG = '<svg viewBox="35 35 330 330" aria-hidden="true"><path fill="currentColor" d="M365 200 364.9 231.7 364.8 244.1 364.6 253.5 364.3 261.3 364.0 268.2 363.6 274.3 363.1 279.9 362.5 285.0 361.8 289.8 361.1 294.3 360.2 298.5 359.3 302.5 358.3 306.2 357.3 309.8 356.1 313.2 354.9 316.5 353.6 319.6 352.2 322.5 350.7 325.4 349.1 328.1 347.4 330.6 345.7 333.1 343.8 335.5 341.9 337.7 339.9 339.9 337.7 341.9 335.5 343.8 333.1 345.7 330.6 347.4 328.1 349.1 325.4 350.7 322.5 352.2 319.6 353.6 316.5 354.9 313.2 356.1 309.8 357.3 306.2 358.3 302.5 359.3 298.5 360.2 294.3 361.1 289.8 361.8 285.0 362.5 279.9 363.1 274.3 363.6 268.2 364.0 261.3 364.3 253.5 364.6 244.1 364.8 231.7 364.9 200 365 168.2 364.9 155.8 364.8 146.4 364.6 138.6 364.3 131.7 364.0 125.6 363.6 120.0 363.1 114.9 362.5 110.1 361.8 105.6 361.1 101.4 360.2 97.4 359.3 93.7 358.3 90.1 357.3 86.7 356.1 83.4 354.9 80.3 353.6 77.4 352.2 74.5 350.7 71.8 349.1 69.3 347.4 66.8 345.7 64.4 343.8 62.2 341.9 60.1 339.9 58.0 337.7 56.1 335.5 54.2 333.1 52.5 330.6 50.8 328.1 49.2 325.4 47.7 322.5 46.3 319.6 45.0 316.5 43.8 313.2 42.6 309.8 41.6 306.2 40.6 302.5 39.7 298.5 38.9 294.3 38.1 289.8 37.4 285.0 36.9 279.9 36.4 274.3 35.9 268.2 35.6 261.3 35.3 253.5 35.1 244.1 35.0 231.7 35 200 35.0 168.2 35.1 155.8 35.3 146.4 35.6 138.6 35.9 131.7 36.4 125.6 36.9 120.0 37.4 114.9 38.1 110.1 38.9 105.6 39.7 101.4 40.6 97.4 41.6 93.7 42.6 90.1 43.8 86.7 45.0 83.4 46.3 80.3 47.7 77.4 49.2 74.5 50.8 71.8 52.5 69.3 54.2 66.8 56.1 64.4 58.0 62.2 60.1 60.1 62.2 58.0 64.4 56.1 66.8 54.2 69.3 52.5 71.8 50.8 74.5 49.2 77.4 47.7 80.3 46.3 83.4 45.0 86.7 43.8 90.1 42.6 93.7 41.6 97.4 40.6 101.4 39.7 105.6 38.9 110.1 38.1 114.9 37.4 120.0 36.9 125.6 36.4 131.7 35.9 138.6 35.6 146.4 35.3 155.8 35.1 168.2 35.0 200 35 231.7 35.0 244.1 35.1 253.5 35.3 261.3 35.6 268.2 35.9 274.3 36.4 279.9 36.9 285.0 37.4 289.8 38.1 294.3 38.9 298.5 39.7 302.5 40.6 306.2 41.6 309.8 42.6 313.2 43.8 316.5 45.0 319.6 46.3 322.5 47.7 325.4 49.2 328.1 50.8 330.6 52.5 333.1 54.2 335.5 56.1 337.7 58.0 339.9 60.1 341.9 62.2 343.8 64.4 345.7 66.8 347.4 69.3 349.1 71.8 350.7 74.5 352.2 77.4 353.6 80.3 354.9 83.4 356.1 86.7 357.3 90.1 358.3 93.7 359.3 97.4 360.2 101.4 361.1 105.6 361.8 110.1 362.5 114.9 363.1 120.0 363.6 125.6 364.0 131.7 364.3 138.6 364.6 146.4 364.8 155.8 364.9 168.2ZM152.2 103.4Q152.2 100.7 150.3 98.7Q148.3 96.8 145.6 96.8Q142.9 96.8 141.0 98.7Q139.1 100.7 139.1 103.4V276.6Q139.1 294.1 148.3 303.9Q157.1 313.4 171.8 313.4Q186.1 313.4 194.6 304.3Q203.0 295.1 203.0 279.4V210.6Q203.0 199.9 210.3 192.8Q217.8 185.5 229.5 185.5Q242.3 185.5 249.2 194.1Q250.9 196.2 253.5 196.5Q256.2 196.8 258.3 195.1Q260.5 193.4 260.8 190.7Q261.1 188.0 259.4 185.9Q248.6 172.5 229.5 172.5Q212.5 172.5 201.2 183.4Q190.0 194.3 190.0 210.6V279.4Q190.0 300.3 171.8 300.3Q152.2 300.3 152.2 276.6Z"/></svg>';
function logo(cls) { return h("div", { class: cls, html: LOGO_SVG }); }
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
/* dati salvati sul telefono per l'uso senza connessione */
function isNetErr(e) { var m = (e && (e.message || String(e))) || ""; return !navigator.onLine || /fetch|network|load failed/i.test(m); }
function lsGet(k) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* spazio pieno */ } }
function lsDel(k) { try { localStorage.removeItem(k); } catch (e) { /* niente */ } }
async function cq(key, fn) {
  var k = "lr-c-" + (S.user ? S.user.id : "x") + "-" + key;
  try { var d = await fn(); lsSet(k, d); S.offline = false; return d; }
  catch (e) { var c = lsGet(k); if (c !== null && isNetErr(e)) { S.offline = true; return c; } throw e; }
}
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
    '<path d="' + d + '" fill="none" stroke="#1F2A3D" stroke-width="2.5" vector-effect="non-scaling-stroke"/>' +
    pts.map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="#1F2A3D"/>'; }).join("") + "</svg>";
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
  try { S.me = await cq("me", function () { return q(sb.from("profiles").select("*").eq("id", user.id).single()); }); }
  catch (e) { fail(e); await sb.auth.signOut(); return renderLogin(); }
  if (!S.me.active && S.me.role !== "admin") { await sb.auth.signOut(); return renderLogin("Account non attivo. Contatta la tua personal trainer."); }
  if (S.me.role === "client" && !S.me.privacy_accepted_at) return renderPrivacy();
  if (S.me.role === "client" && S.me.must_change_password) return renderFirstPassword();
  S.tab = S.me.role === "admin" ? "clienti" : "allenamento";
  S.view = null;
  if (/[?&]v=notifiche/.test(location.search)) { S.view = { name: "notifiche" }; try { history.replaceState(null, "", location.pathname); } catch (e) { /* niente */ } }
  render();
  syncPush(false).catch(function () {});
  flushOutbox();
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
    logo("mono"),
    h("h1", { class: "wm" }, "lorena rigoni"),
    h("div", { class: "tag" }, "personal trainer"),
    field("Username", "lu", "text", "", { autocomplete: "username", autocapitalize: "none", autocorrect: "off" }),
    field("Password", "lp", "password", "", { autocomplete: "current-password" }),
    h("button", { class: "btn block", id: "lb", type: "submit" }, "Accedi"),
    err,
    h("p", { class: "small muted", style: "text-align:center;margin-top:28px" }, "Hai dimenticato la password? Scrivi a Lorena su WhatsApp."));
  root.appendChild(form);
}
/* ---------- primo accesso: privacy e nuova password ---------- */
function gateShell(children) {
  root.innerHTML = "";
  root.appendChild(h("div", { class: "login", style: "justify-content:flex-start;padding-top:calc(env(safe-area-inset-top) + 40px)" }, logo("mono"), children));
}
async function renderPrivacy() {
  var txt = "";
  try { var st = await q(sb.from("booking_settings").select("privacy_text").eq("id", 1).single()); txt = st.privacy_text || ""; } catch (e) { /* niente */ }
  var chk = h("input", { type: "checkbox", id: "pv_ok", style: "width:auto;margin-top:3px", onchange: function () { btn.disabled = !chk.checked; } });
  var btn = h("button", { class: "btn block", disabled: true, onclick: async function () {
    btn.disabled = true;
    try { await q(sb.rpc("accept_privacy")); S.me.privacy_accepted_at = new Date().toISOString(); lsDel("lr-c-" + S.user.id + "-me"); afterLogin(S.user); }
    catch (e) { fail(e); btn.disabled = false; }
  } }, "Continua");
  gateShell([
    h("h1", null, "Ti diamo il benvenuto"),
    h("p", { class: "muted", style: "text-align:center" }, "Prima di iniziare, una cosa importante sui tuoi dati."),
    h("div", { class: "card small" }, h("p", { style: "margin-top:0" }, "In questa app salverai allenamenti e carichi e, con Lorena, misure, peso, foto dei progressi e check-in. Sono dati personali e in parte relativi alla salute."),
      h("p", { style: "margin-bottom:0" }, "Li vedete solo tu e Lorena, non li cediamo a nessuno e puoi chiederne la cancellazione quando vuoi."),
      txt ? h("details", { style: "margin-top:10px" }, h("summary", { style: "cursor:pointer;color:var(--rose-d)" }, "Leggi l'informativa completa"), h("div", { class: "small", style: "white-space:pre-wrap;margin-top:8px" }, txt)) : null),
    h("label", { for: "pv_ok", style: "display:flex;gap:10px;align-items:flex-start;text-transform:none;letter-spacing:0;font-size:.92rem;color:var(--ink)" }, chk,
      h("span", null, "Ho letto l'informativa e acconsento al trattamento dei miei dati, compresi quelli relativi alla salute, per il servizio di personal training.")),
    btn,
    h("button", { class: "link small", style: "margin-top:18px;align-self:center", onclick: logout }, "Esci")
  ]);
}
function renderFirstPassword() {
  var err = h("div", { class: "err" });
  gateShell([
    h("h1", null, "Scegli la tua password"),
    h("p", { class: "muted", style: "text-align:center" }, "La password che hai ricevuto è provvisoria. Scegline una tua: la userai per entrare d'ora in poi."),
    field("Nuova password (min. 8 caratteri)", "fp_1", "password", "", { autocomplete: "new-password" }),
    field("Ripeti la password", "fp_2", "password", "", { autocomplete: "new-password" }),
    h("button", { class: "btn block", onclick: async function (e) {
      var a = $("#fp_1").value, b = $("#fp_2").value; err.textContent = "";
      if (a.length < 8) { err.textContent = "Almeno 8 caratteri"; return; }
      if (a !== b) { err.textContent = "Le due password non coincidono"; return; }
      e.target.disabled = true;
      var r = await sb.auth.updateUser({ password: a });
      if (r.error && !/same_password|different from the old/i.test(r.error.message)) { err.textContent = traduci(r.error.message); e.target.disabled = false; return; }
      if (r.error) { err.textContent = "Scegli una password diversa da quella provvisoria"; e.target.disabled = false; return; }
      try { await q(sb.rpc("password_changed")); } catch (er) { /* niente */ }
      S.me.must_change_password = false; lsDel("lr-c-" + S.user.id + "-me"); toast("Password salvata"); afterLogin(S.user);
    } }, "Salva password"),
    err,
    h("button", { class: "link small", style: "margin-top:18px;align-self:center", onclick: logout }, "Esci")
  ]);
}
function showPrivacyText() {
  q(sb.from("booking_settings").select("privacy_text").eq("id", 1).single()).then(function (st) {
    modal("Informativa privacy", h("div", { class: "small", style: "white-space:pre-wrap" }, st.privacy_text || "Informativa non ancora disponibile."));
  }).catch(fail);
}
async function logout() { await unregisterPush(); S.pushOk = false; await sb.auth.signOut(); S.user = S.me = null; renderLogin(); }

/* ---------- shell ---------- */
var TAB_ICONS = {
  allenamento: "M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z",
  lezioni: "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM4 10h16M9 3v4M15 3v4",
  agenda: "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM4 10h16M9 3v4M15 3v4",
  abbonamenti: "M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM3 10h18M7 15h4",
  scadenze: "M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM3 10h18M7 15h4",
  progressi: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  profilo: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0",
  clienti: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21a7 7 0 0 1 14 0M16 3.5a4 4 0 0 1 0 7.5M18 14a7 7 0 0 1 4 7",
  esercizi: "M6 8v8M3 10v4M18 8v8M21 10v4M6 12h12"
};
function tabIcon(id, fallback) {
  var d = TAB_ICONS[id];
  if (!d) return h("span", { class: "ic" }, fallback);
  return h("span", { class: "ic", html: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + d + '" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>' });
}
var ADMIN_TABS = [["clienti", "Clienti", "♡"], ["agenda", "Agenda", "◷"], ["esercizi", "Esercizi", "◇"], ["scadenze", "Scadenze", "€"], ["profilo", "Profilo", "○"]];
var CLIENT_TABS = [["allenamento", "Oggi", "♡"], ["lezioni", "Lezioni", "◷"], ["abbonamenti", "Abbonamenti", "€"], ["progressi", "Progressi", "↗"], ["profilo", "Profilo", "○"]];
function go(tab, view) { S.tab = tab; S.view = view || null; render(); window.scrollTo(0, 0); }
function openView(view) { S.view = view; render(); window.scrollTo(0, 0); }
async function render() {
  stopRest();
  root.innerHTML = "";
  var main = h("div", { class: "wrap" });
  var tabs = S.me.role === "admin" ? ADMIN_TABS : CLIENT_TABS;
  root.appendChild(main);
  root.appendChild(h("nav", { class: "tabs" }, tabs.map(function (t) {
    return h("button", { class: S.tab === t[0] ? "on" : "", onclick: function () { go(t[0]); } }, tabIcon(t[0], t[2]), t[1]);
  })));
  main.appendChild(h("div", { class: "top" },
    h("div", { class: "brand" }, logo("logo"), h("div", null, "lorena rigoni", h("small", null, "personal trainer"))),
    h("div", { class: "topr" }, h("span", { class: "small muted" }, S.me.full_name || S.me.username), bellBtn())));
  updateBell();
  var body = h("div"); main.appendChild(body);
  body.appendChild(h("div", { class: "empty" }, "Caricamento…"));
  try {
    var fn = VIEWS[S.view ? S.view.name : S.tab];
    var out = await fn(S.view || {});
    body.innerHTML = ""; add(body, out);
    if (S.offline) body.insertBefore(h("div", { class: "offline" }, "Sei offline: stai vedendo i dati salvati sul telefono."), body.firstChild);
  } catch (e) {
    body.innerHTML = "";
    if (isNetErr(e)) body.appendChild(h("div", { class: "card empty" }, "Sei offline: questa sezione si aggiorna appena torna la connessione."));
    else { body.appendChild(h("div", { class: "empty" }, "Impossibile caricare i dati.")); fail(e); }
  }
}
var VIEWS = {};

/* =================== AREA ADMIN =================== */
VIEWS.clienti = async function () {
  var r = await Promise.all([
    q(sb.from("profiles").select("*").eq("role", "client").order("full_name")),
    q(sb.from("workout_logs").select("client_id, performed_on").gte("performed_on", addDays(today(), -180)).order("performed_on", { ascending: false })),
    q(sb.from("checkins").select("client_id").eq("week_start", weekStartOf(romeDay(new Date()))))
  ]);
  var clients = r[0], last = {}, ck = {};
  r[1].forEach(function (l) { if (!last[l.client_id]) last[l.client_id] = l.performed_on; });
  r[2].forEach(function (c) { ck[c.client_id] = true; });
  var since = function (d) { return Math.round((new Date(today() + "T12:00:00Z") - new Date(d + "T12:00:00Z")) / 864e5); };
  var showAll = S.showInactive;
  var list = clients.filter(function (c) { return showAll || c.active; });
  var idle = clients.filter(function (c) {
    if (!c.active) return false;
    return last[c.id] ? since(last[c.id]) >= 10 : since(String(c.created_at).slice(0, 10)) >= 10;
  });
  var lastTxt = function (c) { return last[c.id] ? (since(last[c.id]) === 0 ? "allenata oggi" : "ultimo allenamento " + since(last[c.id]) + " gg fa") : "nessun allenamento"; };
  return [
    h("div", { class: "row" }, h("h1", null, "Clienti"), h("button", { class: "btn sm", onclick: newClient }, "+ Nuovo")),
    idle.length ? h("div", { class: "card freed" }, h("div", { class: "eyebrow" }, "Da ricontattare · nessun allenamento da 10+ giorni"),
      h("div", { class: "list" }, idle.map(function (c) {
        var wa = c.phone ? waLink(c.phone, "Ciao " + firstName(c) + ", come stai? È da qualche giorno che non ti vedo allenarti, va tutto bene?") : null;
        return h("div", { class: "item", style: "cursor:default" },
          h("div", { style: "cursor:pointer", onclick: function () { openView({ name: "cliente", id: c.id, sub: "diario" }); } }, h("div", null, c.full_name || c.username), h("div", { class: "small muted" }, last[c.id] ? "ultimo allenamento il " + fmtDate(last[c.id]) : "non ha ancora registrato allenamenti")),
          wa ? h("a", { class: "btn ghost sm", href: wa, target: "_blank", rel: "noopener" }, "WhatsApp") : h("span", { class: "small muted" }, "senza telefono"));
      }))) : null,
    h("div", { class: "card list" }, list.length ? list.map(function (c) {
      return h("div", { class: "item", onclick: function () { openView({ name: "cliente", id: c.id, sub: "scheda" }); } },
        h("div", null, h("div", null, c.full_name || c.username), h("div", { class: "small muted" }, "@" + c.username + (c.training_mode ? " · " + c.training_mode : "") + " · " + lastTxt(c) + (ck[c.id] ? " · check-in ✓" : ""))),
        c.active ? h("span", { class: "muted" }, "›") : h("span", { class: "pill off" }, "non attivo"));
    }) : h("div", { class: "empty" }, "Nessun cliente. Crea il primo con “+ Nuovo”.")),
    h("div", { class: "row", style: "justify-content:space-between" },
      h("button", { class: "link small", onclick: function () { S.showInactive = !showAll; render(); } }, showAll ? "Nascondi clienti non attivi" : "Mostra anche clienti non attivi"),
      clients.some(function (c) { return c.active; }) ? h("button", { class: "btn ghost sm", onclick: function () { msgModal(clients.filter(function (c) { return c.active; }).map(function (c) { return c.id; }), null); } }, "Messaggio a tutte") : null)
  ];
};
function msgModal(ids, label) {
  modal(label ? "Messaggio a " + label : "Messaggio a tutte le clienti", [
    field("Messaggio", "mm_t", "textarea", "", { placeholder: label ? "es. Brava per questa settimana! Lunedì aumentiamo il carico nello squat." : "es. Settimana prossima la palestra è chiusa giovedì." }),
    h("p", { class: "small muted" }, "Arriva come notifica e resta in evidenza nella home della cliente per tre settimane.")
  ], async function () {
    var t = val("mm_t"); if (!t) { toast("Scrivi il messaggio"); return false; }
    await q(sb.from("notifications").insert(ids.map(function (id) { return { user_id: id, kind: "messaggio", title: "Messaggio da " + (firstName(S.me) || "Lorena"), body: t }; })));
    toast(ids.length === 1 ? "Messaggio inviato" : "Messaggio inviato a " + ids.length + " clienti");
  }, "Invia");
}
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
  var subs = [["scheda", "Schede"], ["diario", "Diario"], ["carichi", "Carichi"], ["misure", "Misure"], ["obiettivi", "Obiettivi"], ["checkin", "Check-in"], ["foto", "Foto"], ["pagamenti", "Pagamenti"], ["note", "Note"], ["account", "Account"]];
  var content = await CLIENT_SUB[v.sub](c, v);
  return [
    h("button", { class: "back", onclick: function () { go("clienti"); } }, "‹ Tutti i clienti"),
    h("div", { class: "row" }, h("h1", null, c.full_name || c.username), h("button", { class: "btn ghost sm", onclick: function () { msgModal([c.id], firstName(c)); } }, "Messaggio")),
    h("div", { class: "small muted", style: "margin-top:-6px" }, "@" + c.username + (c.phone ? " · " + c.phone : "")),
    h("div", { class: "subnav" }, subs.map(function (s) {
      return h("button", { class: v.sub === s[0] ? "on" : "", onclick: function () { openView({ name: "cliente", id: v.id, sub: s[0] }); } }, s[1]);
    })),
    content
  ];
};
var CLIENT_SUB = {};
CLIENT_SUB.carichi = async function (c) { return [h("h2", null, "Carichi e record"), await loadsView(c.id)]; };
CLIENT_SUB.checkin = async function (c) { return [h("h2", null, "Check-in settimanali"), await checkinsView(c.id)]; };
CLIENT_SUB.foto = async function (c) { return [h("h2", null, "Foto dei progressi"), await photosView(c.id, true, function () { reloadClient(c, "foto"); })]; };
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
  var logs = await cq("hist-" + clientId, function () { return q(sb.from("workout_logs").select("*, program_days(name), set_logs(*, exercises(name))").eq("client_id", clientId).order("performed_on", { ascending: false }).limit(40)); });
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
/* --- misure a schede con variazione --- */
async function measuresView(clientId, adminClient) {
  var ms = await cq("meas-" + clientId, function () { return q(sb.from("measurements").select("*").eq("client_id", clientId).order("measured_on")); });
  if (!ms.length) return h("div", { class: "card empty" }, "Nessuna misura registrata.");
  var tiles = MEAS.map(function (k) {
    var vs = ms.filter(function (m) { return m[k[0]] !== null; });
    if (!vs.length) return null;
    var f = vs[0], l = vs[vs.length - 1], dlt = Math.round((Number(l[k[0]]) - Number(f[k[0]])) * 10) / 10;
    return h("div", { class: "tile" }, h("div", { class: "eyebrow", style: "margin:0" }, k[1]),
      h("div", { class: "tv" }, n2(l[k[0]]), h("small", null, " " + k[2])),
      vs.length > 1 ? h("div", { class: "small muted" }, (dlt > 0 ? "+" : dlt < 0 ? "−" : "±") + n2(Math.abs(dlt)) + " " + k[2] + " dal " + fmtDate(f.measured_on)) : h("div", { class: "small muted" }, fmtDate(l.measured_on)));
  }).filter(Boolean);
  var w = ms.filter(function (m) { return m.weight_kg !== null; }).map(function (m) { return { x: m.measured_on, y: Number(m.weight_kg) }; });
  var rev = ms.slice().reverse();
  var table = h("div", { class: "scroll" }, h("table", null,
    h("thead", null, h("tr", null, h("th", null, "Data"), MEAS.map(function (m) { return h("th", null, m[1] + " (" + m[2] + ")"); }))),
    h("tbody", null, rev.map(function (m) {
      return h("tr", { style: adminClient ? "cursor:pointer" : null, onclick: adminClient ? function () { editMeasure(adminClient, m); } : null },
        h("td", null, fmtDate(m.measured_on)), MEAS.map(function (k) { return h("td", null, m[k[0]] !== null ? String(m[k[0]]).replace(".", ",") : "—"); }));
    }))));
  return [
    h("div", { class: "small muted", style: "margin:-4px 0 10px" }, "Ultima misurazione: " + fmtDate(rev[0].measured_on)),
    h("div", { class: "tiles" }, tiles),
    w.length > 1 ? h("div", { class: "card" }, h("div", { class: "eyebrow" }, "Andamento peso"), lineChart(w, "kg")) : null,
    rev[0].notes ? h("div", { class: "tip", style: "margin-bottom:14px" }, rev[0].notes) : null,
    adminClient ? h("div", { class: "card" }, h("div", { class: "eyebrow" }, "Storico (tocca una riga per modificarla)"), table)
      : h("details", { class: "card" }, h("summary", { class: "eyebrow", style: "cursor:pointer;margin:0" }, "Vedi tutte le misurazioni"), table)
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
  var gs = await cq("goals-" + clientId, function () { return q(sb.from("goals").select("*").eq("client_id", clientId).order("created_at", { ascending: false })); });
  if (!gs.length) return h("div", { class: "card empty" }, "Nessun obiettivo impostato.");
  return gs.map(function (g) {
    var st = GOAL_ST[g.status], u = g.unit ? " " + g.unit : "";
    var hasBar = g.target_value !== null && g.start_value !== null && g.current_value !== null && Number(g.target_value) !== Number(g.start_value);
    var pct = hasBar ? Math.max(0, Math.min(1, (g.current_value - g.start_value) / (g.target_value - g.start_value))) : (g.status === "raggiunto" ? 1 : null);
    return h("div", { class: "card" + (adminClient ? " tap" : ""), onclick: adminClient ? function () { editGoal(adminClient, g); } : null },
      h("div", { class: "row" }, h("h3", null, g.title), h("span", { class: "pill " + st[1] }, st[0])),
      g.description ? h("p", { class: "small" }, g.description) : null,
      pct !== null ? h("div", { class: "bar" }, h("i", { style: "width:" + Math.round(pct * 100) + "%" })) : null,
      pct !== null ? h("div", { class: "small", style: "margin-top:4px;color:var(--rose-d)" }, Math.round(pct * 100) + "% del percorso") : null,
      h("div", { class: "small muted", style: "margin-top:4px" }, [g.start_value !== null ? "Partenza " + n2(g.start_value) + u : null, g.current_value !== null ? "Attuale " + n2(g.current_value) + u : null,
        g.target_value !== null ? "Obiettivo " + n2(g.target_value) + u : null].filter(Boolean).join(" · ")),
      h("div", { class: "small muted" }, [g.deadline ? "entro il " + fmtDate(g.deadline) : null, g.achieved_on ? "raggiunto il " + fmtDate(g.achieved_on) : null].filter(Boolean).join(" · ")));
  });
}
function editGoal(c, g) {
  g = g || {};
  modal(g.id ? "Modifica obiettivo" : "Nuovo obiettivo", [
    field("Obiettivo", "gl_t", "text", g.title, { placeholder: "es. Squat con 40 kg" }),
    field("Descrizione", "gl_d", "textarea", g.description),
    h("div", { class: "grid3" }, field("Partenza", "gl_sv", "text", g.start_value, { inputmode: "decimal" }), field("Attuale", "gl_cv", "text", g.current_value, { inputmode: "decimal" }), field("Obiettivo", "gl_v", "text", g.target_value, { inputmode: "decimal" })),
    field("Unità", "gl_u", "text", g.unit, { placeholder: "kg, cm, min" }),
    h("p", { class: "small muted" }, "Con partenza, attuale e obiettivo la cliente vede una barra di avanzamento. Aggiorna il valore attuale quando la rivedi."),
    field("Scadenza", "gl_dl", "date", g.deadline),
    select("Stato", "gl_s", [["in_corso", "In corso"], ["raggiunto", "Raggiunto"], ["sospeso", "Sospeso"]], g.status || "in_corso"),
    g.id ? h("button", { class: "btn danger sm", style: "margin-top:16px", onclick: function () {
      confirmDo("Eliminare questo obiettivo?", async function () { try { await q(sb.from("goals").delete().eq("id", g.id)); document.querySelector(".modal").remove(); reloadClient(c, "obiettivi"); } catch (e) { fail(e); } });
    } }, "Elimina") : null
  ], async function () {
    var st = $("#gl_s").value;
    var row = { client_id: c.id, title: val("gl_t"), description: val("gl_d"), start_value: num("gl_sv"), current_value: num("gl_cv"), target_value: num("gl_v"), unit: val("gl_u"), deadline: val("gl_dl"), status: st,
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
      h("div", null, h("div", null, s.plan_name), h("div", { class: "small muted" }, (s.pending ? "acquistato il " + fmtDate(String(s.created_at).slice(0, 10)) : fmtDate(s.start_date) + " → " + fmtDate(s.end_date)) + " · " + euro(s.price_eur) + (s.lessons_included ? " · " + s.lessons_included + " lezioni" : "") + (s.bought_in_app ? " · acquistato dall'app" : ""))),
      s.pending ? h("span", { class: "pill warn" }, "in attesa di pagamento") : h("span", { class: "pill " + (expired ? "off" : "ok") }, expired ? "scaduto" : "attivo"));
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
function addDur(start, iv) {
  if (!iv || !start) return null;
  var m = String(iv).match(/(\d+)\s*(year|mon|day)/); if (!m) return null;
  var d = new Date(start + "T12:00:00Z");
  if (m[2] === "day") d.setUTCDate(d.getUTCDate() + +m[1]); else d.setUTCMonth(d.getUTCMonth() + (m[2] === "year" ? 12 : 1) * +m[1]);
  d.setUTCDate(d.getUTCDate() - 1); return d.toISOString().slice(0, 10);
}
function editSub(c, s) {
  s = s || {};
  var plans = [], planId = s.plan_id || null;
  var pick = s.id ? null : h("select", { id: "sb_pl", onchange: function () {
    var p = plans.filter(function (x) { return x.id === pick.value; })[0]; planId = p ? p.id : null; if (!p) return;
    $("#sb_n").value = p.name; $("#sb_p").value = String(p.price_eur).replace(".", ","); $("#sb_l").value = p.lessons === null ? "" : p.lessons;
    $("#sb_e").value = addDur(val("sb_s") || today(), p.duration) || "";
  } }, h("option", { value: "" }, "— scegli dal listino —"));
  if (pick) q(sb.from("plans").select("*").order("position")).then(function (ps) { plans = ps; ps.forEach(function (p) { pick.appendChild(h("option", { value: p.id }, p.name + " · " + euro(p.price_eur))); }); }).catch(fail);
  modal(s.id ? "Modifica abbonamento" : "Nuovo abbonamento", [
    pick ? h("div", null, h("label", { for: "sb_pl" }, "Dal listino"), pick) : null,
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
    var row = { client_id: c.id, plan_id: planId, plan_name: val("sb_n"), price_eur: num("sb_p"), lessons_included: num("sb_l"), start_date: val("sb_s"), end_date: val("sb_e"), notes: val("sb_x") };
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
  var pays = await q(sb.from("payments").select("*, profiles(full_name, username), subscriptions(plan_name, pending)").eq("status", "da_pagare").order("due_date"));
  var subs = await q(sb.from("subscriptions").select("*, profiles(full_name, username)").eq("pending", false).gte("end_date", t).lte("end_date", in30).order("end_date"));
  var name = function (x) { return x.profiles ? (x.profiles.full_name || x.profiles.username) : ""; };
  var tot = pays.reduce(function (s, p) { return s + Number(p.amount_eur || 0); }, 0);
  return [
    h("h1", null, "Scadenze"),
    h("div", { class: "card" }, h("div", { class: "eyebrow" }, "Da incassare"), h("h2", { style: "margin:0" }, euro(tot)),
      h("div", { class: "small muted" }, pays.length + " pagamenti aperti")),
    h("h2", null, "Pagamenti aperti"),
    pays.length ? h("div", { class: "card list" }, pays.map(function (p) {
      var late = p.due_date && p.due_date < t;
      var pk = p.subscriptions && p.subscriptions.pending;
      return h("div", { class: "item", onclick: function () { openView({ name: "cliente", id: p.client_id, sub: "pagamenti" }); } },
        h("div", null, h("div", null, name(p)), h("div", { class: "small muted" }, euro(p.amount_eur) + " · " + (p.method ? p.method.toLowerCase() + " · " : "") + "scad. " + fmtDate(p.due_date)),
          p.subscriptions ? h("div", { class: "small" }, p.subscriptions.plan_name + (pk ? " · si attiva al pagamento" : "")) : (p.notes ? h("div", { class: "small muted" }, p.notes) : null),
          late ? h("span", { class: "pill warn", style: "margin-top:4px" }, "in ritardo") : null),
        h("button", { class: "btn sm", onclick: function (e) {
          e.stopPropagation();
          confirmDo("Confermi di aver ricevuto " + euro(p.amount_eur) + " da " + name(p) + "?" + (pk ? " Il pacchetto «" + p.subscriptions.plan_name + "» verrà attivato." : ""), async function () {
            try { await q(sb.from("payments").update({ status: "pagato", paid_on: today() }).eq("id", p.id)); toast(pk ? "Pagamento registrato, pacchetto attivato" : "Pagamento registrato"); render(); } catch (er) { fail(er); }
          }, "Ricevuto");
        } }, "Ricevuto"));
    })) : h("div", { class: "card empty" }, "Nessun pagamento in sospeso."),
    h("h2", null, "Abbonamenti in scadenza (30 giorni)"),
    subs.length ? h("div", { class: "card list" }, subs.map(function (s) {
      return h("div", { class: "item", onclick: function () { openView({ name: "cliente", id: s.client_id, sub: "pagamenti" }); } },
        h("div", null, h("div", null, name(s)), h("div", { class: "small muted" }, s.plan_name + " · fine " + fmtDate(s.end_date))), h("span", { class: "muted" }, "›"));
    })) : h("div", { class: "card empty" }, "Nessun abbonamento in scadenza.")
  ];
};

/* =================== AREA CLIENTE =================== */
/* --- home "Oggi" --- */
function draftKey(dayId) { return "lr-draft-" + S.me.id + "-" + dayId; }
function getDraft(dayId) { var d = lsGet(draftKey(dayId)); return d && d.ts && Date.now() - d.ts < 12 * 3600e3 ? d : null; }
function firstName(p) { return ((p && (p.full_name || p.username)) || "").split(" ")[0]; }
function waLink(num, text) { return num ? "https://wa.me/" + waNum(num) + (text ? "?text=" + encodeURIComponent(text) : "") : null; }
VIEWS.allenamento = async function () {
  var tday = romeDay(new Date()), ws = weekStartOf(tday);
  var D = await cq("home", async function () {
    var r = await Promise.all([
      q(sb.from("programs").select("*, program_days(*, program_exercises(id))").eq("client_id", S.me.id).eq("active", true).order("created_at", { ascending: false })),
      q(sb.from("workout_logs").select("performed_on, day_id").eq("client_id", S.me.id).order("performed_on", { ascending: false }).order("created_at", { ascending: false }).limit(40)),
      q(sb.from("bookings").select("*").eq("client_id", S.me.id).eq("status", "confermata").gte("starts_at", new Date(Date.now() - 3600e3).toISOString()).order("starts_at").limit(1)),
      q(sb.from("notifications").select("title, body, created_at").eq("user_id", S.me.id).eq("kind", "messaggio").order("created_at", { ascending: false }).limit(1)),
      q(sb.from("checkins").select("week_start").eq("client_id", S.me.id).eq("week_start", ws)),
      q(sb.from("booking_settings").select("whatsapp_number, gym_address").eq("id", 1).single())
    ]);
    return { progs: r[0], logs: r[1], next: r[2][0] || null, msg: r[3][0] || null, checkin: r[4].length > 0, st: r[5] };
  });
  S.wa = D.st && D.st.whatsapp_number;
  var nome = firstName(S.me);
  var weekDays = {}; D.logs.forEach(function (l) { if (l.performed_on >= ws) weekDays[l.performed_on] = true; });
  var nWeek = Object.keys(weekDays).length;
  var dots = h("div", { class: "week" }, WD.map(function (w, i) {
    var d = addDays(ws, i);
    return h("div", { class: "wday" + (weekDays[d] ? " on" : "") + (d === tday ? " today" : "") }, h("span", null, w), h("i"));
  }));
  // allenamento consigliato: il giorno successivo all'ultimo fatto, nella scheda più recente
  var prog = D.progs[0], days = prog ? (prog.program_days || []).slice().sort(function (a, b) { return a.position - b.position; }) : [];
  var suggested = null, doneToday = false;
  if (days.length) {
    var ids = days.map(function (d) { return d.id; });
    var lastLog = D.logs.filter(function (l) { return ids.indexOf(l.day_id) > -1; })[0];
    suggested = lastLog ? days[(ids.indexOf(lastLog.day_id) + 1) % days.length] : days[0];
    doneToday = !!(lastLog && lastLog.performed_on === tday);
  }
  var allDays = []; D.progs.forEach(function (p) { (p.program_days || []).forEach(function (d) { allDays.push({ d: d, p: p }); }); });
  var draftDay = allDays.filter(function (x) { return getDraft(x.d.id); })[0];
  var pend = (lsGet(outboxKey()) || []).length;
  var msgRecent = D.msg && Date.now() - new Date(D.msg.created_at).getTime() < 21 * 864e5;
  return [
    h("div", { class: "eyebrow" }, new Date().toLocaleDateString("it-IT", { weekday: "long", day: "numeric", month: "long" })),
    h("h1", null, "Ciao" + (nome ? " " + nome : "") + ","),
    h("p", { class: "muted", style: "margin-top:-8px" }, nWeek ? "Questa settimana: " + nWeek + (nWeek === 1 ? " allenamento." : " allenamenti.") : "Nessun allenamento ancora questa settimana."),
    dots,
    pend ? h("div", { class: "tip", style: "margin-bottom:14px" }, pend + (pend === 1 ? " allenamento" : " allenamenti") + " salvati sul telefono: verranno inviati appena torna la connessione.") : null,
    msgRecent ? h("div", { class: "card freed" }, h("div", { class: "eyebrow" }, D.msg.title), h("p", { style: "margin:0;white-space:pre-wrap" }, D.msg.body), h("div", { class: "small muted", style: "margin-top:6px" }, whenAgo(D.msg.created_at))) : null,
    draftDay ? h("div", { class: "card freed" }, h("div", { class: "eyebrow" }, "Allenamento in corso"), h("h3", null, draftDay.d.name),
      h("p", { class: "small muted", style: "margin:0" }, "Le serie che hai segnato sono salvate sul telefono."),
      h("button", { class: "btn block", onclick: function () { openView({ name: "workout", day: draftDay.d.id }); } }, "Riprendi")) : null,
    suggested && !draftDay ? h("div", { class: "card" }, h("div", { class: "eyebrow" }, doneToday ? "Il prossimo allenamento" : "Allenamento di oggi"),
      h("h2", { style: "margin-bottom:2px" }, suggested.name), h("div", { class: "small muted" }, prog.title + " · " + (suggested.program_exercises || []).length + " esercizi"),
      doneToday ? h("div", { class: "small", style: "margin-top:8px;color:#4F7458" }, "Allenamento di oggi fatto ✓") : null,
      h("button", { class: "btn block", onclick: function () { openView({ name: "workout", day: suggested.id }); } }, "Inizia")) : null,
    !prog ? h("div", { class: "card empty" }, "La tua scheda è in preparazione. A presto!") : null,
    D.next ? h("div", { class: "card tap", onclick: function () { go("lezioni"); } }, h("div", { class: "eyebrow" }, "Prossima lezione"),
      h("div", { class: "row" }, h("div", null, h("h3", { style: "margin:0" }, slotLabel(D.next.starts_at)), h("div", { class: "small muted" }, MODE[D.next.mode] + (D.next.mode === "online" && D.next.meet_link ? " · link pronto" : ""))), h("span", { class: "muted" }, "›")))
      : h("div", { class: "card row" }, h("div", null, h("div", { class: "eyebrow", style: "margin:0" }, "Lezioni"), h("div", { class: "small muted" }, "Nessuna lezione prenotata")), h("button", { class: "btn sm", onclick: function () { S.bk = null; S.tab = "lezioni"; openView({ name: "prenota" }); } }, "Prenota")),
    !D.checkin ? h("div", { class: "card row" }, h("div", null, h("div", { class: "eyebrow", style: "margin:0" }, "Check-in della settimana"), h("div", { class: "small muted" }, "4 domande, meno di un minuto")),
      h("button", { class: "btn sm", onclick: function () { openView({ name: "checkin" }); } }, "Compila")) : null,
    allDays.length > 1 ? h("div", { class: "card" }, h("div", { class: "eyebrow" }, "Le tue schede"), h("div", { class: "list" }, allDays.map(function (x) {
      return h("div", { class: "item", onclick: function () { openView({ name: "workout", day: x.d.id }); } },
        h("div", null, h("div", null, x.d.name), h("div", { class: "small muted" }, x.p.title + " · " + (x.d.program_exercises || []).length + " esercizi")), h("span", { class: "muted" }, "›"));
    }))) : null,
    S.wa ? h("a", { class: "btn ghost block", href: waLink(S.wa, "Ciao Lorena, "), target: "_blank", rel: "noopener" }, "Scrivi a Lorena su WhatsApp") : null
  ];
};

/* --- allenamento: salvataggio automatico, ✓ per serie, timer di recupero, offline --- */
var REST = { t: null, end: 0 };
function stopRest() { if (REST.t) clearInterval(REST.t); REST.t = null; var b = document.getElementById("restbar"); if (b) b.remove(); }
function startRest(sec, label) {
  stopRest();
  REST.end = Date.now() + sec * 1000;
  var rt = h("div", { class: "rt" });
  var bar = h("div", { class: "restbar", id: "restbar" },
    h("div", null, h("div", { class: "small" }, "Recupero · " + label), rt),
    h("div", { class: "row", style: "gap:6px" },
      h("button", { class: "btn ghost sm", onclick: function () { REST.end += 15000; tick(); } }, "+15″"),
      h("button", { class: "btn sm", onclick: stopRest }, "Salta")));
  var tick = function () {
    var left = Math.max(0, Math.round((REST.end - Date.now()) / 1000));
    rt.textContent = Math.floor(left / 60) + ":" + pad2(left % 60);
    if (left <= 0 && REST.t) {
      clearInterval(REST.t); REST.t = null; bar.classList.add("end"); rt.textContent = "Via, prossima serie!";
      if (navigator.vibrate) navigator.vibrate([250, 120, 250]);
      setTimeout(function () { if (!REST.t) { var b = document.getElementById("restbar"); if (b === bar) bar.remove(); } }, 5000);
    }
  };
  document.body.appendChild(bar);
  REST.t = setInterval(tick, 500); tick();
}
VIEWS.workout = async function (v) {
  var X = await cq("day-" + v.day, async function () {
    var r = await Promise.all([
      q(sb.from("program_days").select("*, programs(title), program_exercises(*, exercises(*))").eq("id", v.day).single()),
      q(sb.from("workout_logs").select("performed_on, set_logs(exercise_id, set_number, reps, weight_kg)").eq("client_id", S.me.id).order("performed_on", { ascending: false }).order("created_at", { ascending: false }).limit(80)),
      q(sb.from("booking_settings").select("whatsapp_number").eq("id", 1).single())
    ]);
    return { d: r[0], logs: r[1], wa: r[2].whatsapp_number };
  });
  var d = X.d, wa = X.wa || S.wa;
  var exs = (d.program_exercises || []).slice().sort(function (a, b) { return a.position - b.position; });
  var ids = exs.map(function (e) { return e.exercise_id; });
  var prev = {}, best = {};
  X.logs.forEach(function (w) {
    (w.set_logs || []).forEach(function (r) {
      var k = r.exercise_id; if (ids.indexOf(k) < 0) return;
      if (r.weight_kg !== null && (best[k] === undefined || Number(r.weight_kg) > best[k])) best[k] = Number(r.weight_kg);
      if (!prev[k]) prev[k] = { date: w.performed_on, sets: {} };
      if (prev[k].date === w.performed_on && !prev[k].sets[r.set_number]) prev[k].sets[r.set_number] = r;
    });
  });
  var key = draftKey(d.id);
  var draft = getDraft(d.id) || { v: {}, done: {} };
  var resumed = Object.keys(draft.v).length > 0 || Object.keys(draft.done).length > 0;
  var saveDraft = function () { draft.ts = Date.now(); lsSet(key, draft); };
  var track = function (el) { el.addEventListener("input", function () { draft.v[el.id] = el.value; saveDraft(); }); return el; };
  var form = h("div");
  exs.forEach(function (pe, i) {
    var e = pe.exercises || {}; var n = pe.sets || 3; var pv = prev[pe.exercise_id];
    var grid = h("div", { class: "sets" }, h("div", { class: "h" }, "Serie"), h("div", { class: "h" }, "Kg"), h("div", { class: "h" }, "Rip."), h("div", { class: "h" }, "Fatto"));
    for (var s = 1; s <= n; s++) (function (s) {
      var ps = pv && pv.sets[s], k = i + "_" + s;
      var w = track(h("input", { id: "w_" + k, inputmode: "decimal", placeholder: ps && ps.weight_kg !== null ? n2(ps.weight_kg) : "kg" }));
      var r = track(h("input", { id: "r_" + k, inputmode: "numeric", placeholder: ps && ps.reps !== null ? String(ps.reps) : (pe.reps || "rip.") }));
      var c = h("button", { class: "chk", "aria-label": "Serie fatta", onclick: function () {
        if (draft.done[k]) { delete draft.done[k]; c.classList.remove("on"); saveDraft(); return; }
        if (!w.value && w.placeholder !== "kg") w.value = w.placeholder;
        if (!r.value && /^\d+$/.test(r.placeholder)) r.value = r.placeholder;
        draft.v[w.id] = w.value; draft.v[r.id] = r.value; draft.done[k] = true; c.classList.add("on"); saveDraft();
        if (s < n || i < exs.length - 1) startRest(pe.rest_seconds || 90, e.name || "");
      } }, "✓");
      if (draft.v[w.id] !== undefined) w.value = draft.v[w.id];
      if (draft.v[r.id] !== undefined) r.value = draft.v[r.id];
      if (draft.done[k]) c.classList.add("on");
      add(grid, [h("div", { class: "setn" }, s), w, r, c]);
    })(s);
    var note = track(h("input", { id: "n_" + i, placeholder: "Come è andata? (facoltativo)" }));
    if (draft.v[note.id] !== undefined) note.value = draft.v[note.id];
    form.appendChild(h("div", { class: "card" },
      h("div", { class: "eyebrow" }, "Esercizio " + (i + 1) + " di " + exs.length),
      h("h3", null, e.name),
      h("div", { class: "small muted" }, [pe.sets ? pe.sets + " serie" : null, pe.reps ? "× " + pe.reps : null, pe.target_load ? "· " + pe.target_load : null, pe.rest_seconds ? "· recupero " + pe.rest_seconds + "″" : null].filter(Boolean).join(" ")),
      pe.notes ? h("div", { class: "tip" }, h("strong", null, "Lorena: "), pe.notes) : null,
      e.tips ? h("details", { style: "margin-top:8px" }, h("summary", { class: "small", style: "cursor:pointer;color:var(--rose-d)" }, "Consigli di esecuzione"), h("p", { class: "small" }, e.tips), e.description ? h("p", { class: "small muted" }, e.description) : null) : null,
      navigator.onLine ? videoEmbed(e.video_url) : (e.video_url ? h("div", { class: "small muted" }, "Il video si vede quando torna la connessione.") : null),
      pv ? h("div", { class: "small muted", style: "margin-top:10px" }, "In grigio i valori dell'ultima volta (" + fmtDate(pv.date) + "): tocca ✓ per confermarli.") : null,
      best[pe.exercise_id] !== undefined ? h("div", { class: "small muted" }, "Il tuo record: " + n2(best[pe.exercise_id]) + " kg") : null,
      grid,
      h("label", { for: "n_" + i }, "Note"), note,
      wa ? h("a", { class: "small", style: "display:inline-block;margin-top:10px", href: waLink(wa, "Ciao Lorena, ho un dubbio sull'esercizio " + (e.name || "") + ": "), target: "_blank", rel: "noopener" }, "Hai un dubbio? Scrivi a Lorena") : null));
  });
  var wn = track(h("textarea", { id: "wn", placeholder: "Sensazioni, energia, dolori…" }));
  if (draft.v.wn !== undefined) wn.value = draft.v.wn;
  return [
    h("button", { class: "back", onclick: function () { stopRest(); go("allenamento"); } }, "‹ Indietro"),
    h("div", { class: "eyebrow" }, d.programs ? d.programs.title : ""),
    h("h1", null, d.name),
    resumed ? h("div", { class: "tip", style: "margin-bottom:14px" }, "Allenamento ripreso da dove l'avevi lasciato.") : null,
    d.notes ? h("div", { class: "tip", style: "margin-bottom:14px" }, d.notes) : null,
    exs.length ? form : h("div", { class: "card empty" }, "Nessun esercizio in questo giorno."),
    exs.length ? h("div", { class: "card" }, h("label", { for: "wn" }, "Note sull'allenamento"), wn,
      h("button", { class: "btn block", onclick: async function (ev) {
        ev.target.disabled = true;
        try { if (await saveWorkout(d, exs, { key: key, best: best }) === false) ev.target.disabled = false; } catch (e) { fail(e); ev.target.disabled = false; }
      } }, "Salva allenamento"),
      resumed ? h("button", { class: "link small", style: "margin-top:12px", onclick: function () {
        confirmDo("Cancellare le serie segnate e ricominciare da zero?", function () { lsDel(key); render(); }, "Ricomincia");
      } }, "Ricomincia da zero") : null) : null
  ];
};
function outboxKey() { return "lr-outbox-" + (S.me ? S.me.id : "x"); }
async function sendWorkout(p) {
  var w = await q(sb.from("workout_logs").insert(p.log).select().single());
  if (p.sets.length) {
    try { await q(sb.from("set_logs").insert(p.sets.map(function (x) { return Object.assign({}, x, { workout_log_id: w.id }); }))); }
    catch (e) { await sb.from("workout_logs").delete().eq("id", w.id); throw e; }
  }
}
async function flushOutbox() {
  if (!S.me || S.flushing) return;
  var box = lsGet(outboxKey()) || []; if (!box.length) return;
  S.flushing = true; var sent = 0;
  try {
    while (box.length) { await sendWorkout(box[0]); box.shift(); lsSet(outboxKey(), box); sent++; }
  } catch (e) { /* riprova più tardi */ }
  S.flushing = false;
  if (sent) toast(sent === 1 ? "Allenamento salvato offline inviato ✓" : sent + " allenamenti salvati offline inviati ✓");
}
async function saveWorkout(d, exs, ctx) {
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
  var payload = { log: { client_id: S.me.id, day_id: d.id, performed_on: today(), notes: val("wn") }, sets: sets };
  var prs = [];
  exs.forEach(function (pe) {
    var mx = null; sets.forEach(function (x) { if (x.exercise_id === pe.exercise_id && x.weight_kg !== null && (mx === null || x.weight_kg > mx)) mx = x.weight_kg; });
    var old = ctx.best[pe.exercise_id];
    if (mx !== null && old !== undefined && mx > old && !prs.some(function (p) { return p.id === pe.exercise_id; })) prs.push({ id: pe.exercise_id, name: (pe.exercises || {}).name, now: mx, old: old });
  });
  var offline = false;
  try { await sendWorkout(payload); }
  catch (e) {
    if (!isNetErr(e)) throw e;
    var box = lsGet(outboxKey()) || []; box.push(payload); lsSet(outboxKey(), box); offline = true;
  }
  lsDel(ctx.key); stopRest();
  if (offline || !prs.length) toast(offline ? "Sei offline: allenamento salvato sul telefono, lo inviamo appena torna la connessione" : "Allenamento salvato. Ottimo lavoro!");
  S.progSub = "diario"; go(S.me.role === "admin" ? "clienti" : "progressi");
  if (prs.length) modal(prs.length === 1 ? "Nuovo record personale!" : "Nuovi record personali!", [
    h("p", { class: "muted", style: "margin-top:0" }, "Oggi hai superato il tuo massimo:"),
    h("div", { class: "list" }, prs.map(function (p) {
      return h("div", { class: "item", style: "cursor:default" }, h("div", null, p.name), h("div", { class: "pr-big" }, n2(p.now) + " kg", h("small", null, "prima " + n2(p.old) + " kg")));
    })),
    h("p", { class: "small muted" }, "Lo trovi in Progressi → Carichi.")
  ]);
}

/* --- check-in settimanale --- */
VIEWS.checkin = async function () {
  var ws = weekStartOf(romeDay(new Date()));
  var cur = await q(sb.from("checkins").select("*").eq("client_id", S.me.id).eq("week_start", ws).maybeSingle());
  var vals = { energy: cur ? cur.energy : null, sleep: cur ? cur.sleep : null, soreness: cur ? cur.soreness : null, rating: cur ? cur.rating : null };
  var scale = function (k, label, n, lo, hi) {
    var row = h("div", { class: "scale" + (n > 5 ? " ten" : "") });
    var draw = function () { row.innerHTML = ""; for (var i = 1; i <= n; i++) (function (i) { row.appendChild(h("button", { class: vals[k] === i ? "on" : "", onclick: function () { vals[k] = i; draw(); } }, String(i))); })(i); };
    draw();
    return h("div", { class: "card" }, h("h3", null, label), row, h("div", { class: "row small muted", style: "margin-top:6px" }, h("span", null, lo), h("span", null, hi)));
  };
  return [
    h("button", { class: "back", onclick: function () { go("allenamento"); } }, "‹ Indietro"),
    h("div", { class: "eyebrow" }, "Settimana del " + fmtDate(ws)),
    h("h1", null, "Check-in"),
    h("p", { class: "muted", style: "margin-top:-8px" }, "Serve a Lorena per adattare il tuo percorso. Rispondi d'istinto."),
    scale("energy", "Com'è stata la tua energia?", 5, "molto bassa", "ottima"),
    scale("sleep", "Come hai dormito?", 5, "male", "benissimo"),
    scale("soreness", "Dolori o fastidi?", 5, "nessuno", "forti"),
    scale("rating", "Che voto dai alla tua settimana?", 10, "pessima", "perfetta"),
    h("div", { class: "card" }, h("label", { for: "ck_n" }, "Vuoi dire qualcosa a Lorena? (facoltativo)"), h("textarea", { id: "ck_n", value: cur && cur.notes ? cur.notes : "", placeholder: "Es. fastidio al ginocchio negli affondi, settimana stressante al lavoro…" }),
      h("button", { class: "btn block", onclick: async function (e) {
        if (!vals.energy || !vals.sleep || !vals.soreness || !vals.rating) return toast("Rispondi a tutte e 4 le domande");
        e.target.disabled = true;
        try {
          await q(sb.from("checkins").upsert({ client_id: S.me.id, week_start: ws, energy: vals.energy, sleep: vals.sleep, soreness: vals.soreness, rating: vals.rating, notes: val("ck_n") }, { onConflict: "client_id,week_start" }));
          toast("Grazie! Lorena lo vedrà"); go("allenamento");
        } catch (er) { fail(er); e.target.disabled = false; }
      } }, cur ? "Aggiorna check-in" : "Invia check-in"),
      h("button", { class: "link small", style: "margin-top:12px", onclick: function () { S.progSub = "foto"; go("progressi"); } }, "Aggiungi anche le foto dei progressi"))
  ];
};
async function checkinsView(clientId) {
  var cs = await q(sb.from("checkins").select("*").eq("client_id", clientId).order("week_start", { ascending: false }).limit(26));
  if (!cs.length) return h("div", { class: "card empty" }, "Nessun check-in ancora.");
  var pts = cs.slice().reverse().map(function (c) { return { x: c.week_start, y: c.rating }; });
  return [
    pts.length > 1 ? h("div", { class: "card" }, h("div", { class: "eyebrow" }, "Voto alla settimana"), lineChart(pts, "/10")) : null,
    cs.map(function (c) {
      var warn = c.rating <= 5 || c.soreness >= 4 || c.energy <= 2 || c.sleep <= 2;
      return h("div", { class: "card" + (warn ? " freed" : "") },
        h("div", { class: "row" }, h("h3", { style: "margin:0" }, "Settimana del " + fmtDate(c.week_start)), h("span", { class: "pill" + (warn ? " warn" : " ok") }, c.rating + "/10")),
        h("div", { class: "chips" }, h("span", { class: "pill" }, "energia " + c.energy + "/5"), h("span", { class: "pill" }, "sonno " + c.sleep + "/5"), h("span", { class: "pill" + (c.soreness >= 4 ? " warn" : "") }, "fastidi " + c.soreness + "/5")),
        c.notes ? h("div", { class: "tip" }, c.notes) : null);
    })
  ];
}

/* --- carichi e record per esercizio --- */
async function loadsView(clientId) {
  var logs = await cq("loads-" + clientId, function () {
    return q(sb.from("workout_logs").select("performed_on, set_logs(exercise_id, reps, weight_kg, exercises(name, muscle_group))").eq("client_id", clientId).order("performed_on"));
  });
  var ex = {};
  logs.forEach(function (w) {
    (w.set_logs || []).forEach(function (s) {
      if (s.weight_kg === null || !s.exercise_id) return;
      var e = ex[s.exercise_id] = ex[s.exercise_id] || { name: s.exercises ? s.exercises.name : "Esercizio", byDate: {}, best: null };
      var wv = Number(s.weight_kg);
      e.byDate[w.performed_on] = Math.max(e.byDate[w.performed_on] || 0, wv);
      if (!e.best || wv > e.best.w || (wv === e.best.w && (s.reps || 0) > (e.best.r || 0))) e.best = { w: wv, r: s.reps, d: w.performed_on };
    });
  });
  var list = Object.keys(ex).map(function (k) { return ex[k]; }).sort(function (a, b) { return a.name.localeCompare(b.name); });
  if (!list.length) return h("div", { class: "card empty" }, "Qui vedrai i tuoi carichi e i tuoi record appena registri il primo allenamento con i pesi.");
  return [h("p", { class: "small muted", style: "margin-top:0" }, "Tocca un esercizio per vedere come sono cresciuti i carichi."),
    h("div", { class: "card list" }, list.map(function (e) {
      var dates = Object.keys(e.byDate).sort();
      var first = e.byDate[dates[0]], last = e.byDate[dates[dates.length - 1]];
      return h("details", { class: "item ex-item" },
        h("summary", null, h("div", null, h("div", null, e.name), h("div", { class: "small muted" }, "Record " + n2(e.best.w) + " kg" + (e.best.r ? " × " + e.best.r : "") + " · " + fmtDate(e.best.d))),
          dates.length > 1 && last > first ? h("span", { class: "pill ok" }, "+" + n2(Math.round((last - first) * 10) / 10) + " kg") : h("span", { class: "muted" }, "›")),
        dates.length > 1 ? lineChart(dates.map(function (d) { return { x: d, y: e.byDate[d] }; }), "kg") : h("p", { class: "small muted" }, "Il grafico compare dalla seconda volta che fai questo esercizio."));
    }))];
}

/* --- foto dei progressi --- */
var POSES = [["fronte", "Fronte"], ["lato", "Lato"], ["retro", "Retro"]];
async function compressImage(file) {
  var img;
  try { img = await createImageBitmap(file); }
  catch (e) { img = await new Promise(function (ok, ko) { var i = new Image(); i.onload = function () { ok(i); }; i.onerror = ko; i.src = URL.createObjectURL(file); }); }
  var max = 1400, sc = Math.min(1, max / Math.max(img.width, img.height));
  var c = document.createElement("canvas"); c.width = Math.round(img.width * sc); c.height = Math.round(img.height * sc);
  c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
  return await new Promise(function (ok) { c.toBlob(ok, "image/jpeg", 0.82); });
}
async function photosView(clientId, isAdmin, reload) {
  var ps = await q(sb.from("progress_photos").select("*").eq("client_id", clientId).order("taken_on", { ascending: false }).order("created_at", { ascending: false }));
  var urls = {};
  if (ps.length) { var r = await sb.storage.from("photos").createSignedUrls(ps.map(function (p) { return p.path; }), 3600); (r.data || []).forEach(function (x, i) { if (x && x.signedUrl) urls[ps[i].path] = x.signedUrl; }); }
  var byDate = {}; ps.forEach(function (p) { var d = byDate[p.taken_on] = byDate[p.taken_on] || {}; if (!d[p.pose]) d[p.pose] = p; });
  var dates = Object.keys(byDate).sort();
  var img = function (p, cap) {
    return p && urls[p.path] ? h("figure", { class: "ph", onclick: function () { photoZoom(p, urls[p.path], reload); } }, h("img", { src: urls[p.path], loading: "lazy", alt: cap || p.pose }), cap ? h("figcaption", null, cap) : null) : h("figure", { class: "ph empty" }, h("span", null, "—"), cap ? h("figcaption", null, cap) : null);
  };
  var out = [];
  if (!isAdmin) out.push(h("button", { class: "btn block", style: "margin:0 0 14px", onclick: function () { addPhotos(reload); } }, "+ Aggiungi foto"));
  if (!ps.length) { out.push(h("div", { class: "card empty" }, isAdmin ? "Nessuna foto caricata." : "Scatta le prime foto oggi: fra qualche settimana il confronto ti sorprenderà. Le vedete solo tu e Lorena.")); return out; }
  if (dates.length > 1) {
    var a = byDate[dates[0]], b = byDate[dates[dates.length - 1]];
    var rows = POSES.filter(function (p) { return a[p[0]] && b[p[0]]; });
    if (rows.length) out.push(h("div", { class: "card" }, h("div", { class: "eyebrow" }, "Prima e dopo"),
      rows.map(function (p) { return h("div", null, h("div", { class: "small muted", style: "margin:8px 0 4px" }, p[1]), h("div", { class: "ph2" }, img(a[p[0]], fmtDate(dates[0])), img(b[p[0]], fmtDate(dates[dates.length - 1])))); })));
  }
  dates.slice().reverse().forEach(function (d) {
    out.push(h("div", { class: "card" }, h("div", { class: "eyebrow" }, fmtDate(d)), h("div", { class: "ph3" }, POSES.map(function (p) { return img(byDate[d][p[0]], p[1]); }))));
  });
  out.push(h("p", { class: "small muted" }, "Le foto sono private: le vedete solo " + (isAdmin ? "tu e la cliente." : "tu e Lorena.")));
  return out;
}
function photoZoom(p, url, reload) {
  var m = modal(fmtDate(p.taken_on) + " · " + p.pose, [
    h("img", { src: url, style: "width:100%;border-radius:14px;display:block" }),
    h("button", { class: "btn danger sm", style: "margin-top:14px", onclick: function () {
      confirmDo("Eliminare questa foto?", async function () {
        try { await sb.storage.from("photos").remove([p.path]); await q(sb.from("progress_photos").delete().eq("id", p.id)); m.remove(); reload(); } catch (e) { fail(e); }
      });
    } }, "Elimina foto")
  ]);
}
function addPhotos(reload) {
  modal("Foto dei progressi", [
    h("p", { class: "small muted", style: "margin-top:0" }, "Consiglio: stessa luce, stessa posizione e stesso abbigliamento ogni volta. Il confronto sarà molto più utile."),
    field("Data", "ph_d", "date", today()),
    POSES.map(function (p) { return h("div", null, h("label", { for: "ph_" + p[0] }, p[1]), h("input", { id: "ph_" + p[0], type: "file", accept: "image/*" })); })
  ], async function () {
    var d = val("ph_d") || today(), n = 0;
    var b = $(".modal .btn.block:not(.ghost)");
    for (var i = 0; i < POSES.length; i++) {
      var f = pickedFile("ph_" + POSES[i][0]); if (!f) continue;
      if (b) b.textContent = "Caricamento " + (n + 1) + "…";
      var blob = await compressImage(f);
      var path = S.me.id + "/" + Date.now() + "-" + POSES[i][0] + ".jpg";
      await q(sb.storage.from("photos").upload(path, blob, { contentType: "image/jpeg" }));
      await q(sb.from("progress_photos").insert({ client_id: S.me.id, taken_on: d, pose: POSES[i][0], path: path }));
      n++;
    }
    if (!n) { toast("Scegli almeno una foto"); return false; }
    toast(n === 1 ? "Foto salvata" : n + " foto salvate"); reload();
  }, "Salva foto");
}

/* --- progressi --- */
VIEWS.progressi = async function () {
  var sub = S.progSub || "diario";
  var subs = [["diario", "Diario"], ["carichi", "Carichi"], ["misure", "Misure"], ["foto", "Foto"], ["checkin", "Check-in"], ["obiettivi", "Obiettivi"]];
  var content;
  if (sub === "diario") content = await workoutHistory(S.me.id);
  else if (sub === "carichi") content = await loadsView(S.me.id);
  else if (sub === "misure") content = await measuresView(S.me.id, null);
  else if (sub === "foto") content = await photosView(S.me.id, false, function () { render(); });
  else if (sub === "checkin") content = [h("button", { class: "btn ghost block", style: "margin:0 0 14px", onclick: function () { openView({ name: "checkin" }); } }, "Compila il check-in di questa settimana"), await checkinsView(S.me.id)];
  else content = await goalsView(S.me.id, null);
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
  if (S.me.role === "admin" && n.kind === "acquisto") return go("scadenze");
  if (S.me.role !== "admin" && (n.kind === "rinnovo" || n.kind === "pacchetto_attivo")) return go("abbonamenti");
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
    denied: "Le notifiche sono bloccate su questo telefono. Puoi riattivarle da Impostazioni → Notifiche → LorenaPT." }[st];
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
    (function () {
      var tday = romeDay(new Date()), left = 0, unl = false;
      (ctx.subscriptions || []).forEach(function (x) { if (x.start_date <= tday && (!x.end_date || x.end_date >= tday)) { if (x.lessons_included === null) unl = true; else left += Math.max(0, x.lessons_included - x.used); } });
      return h("div", { class: "card row small", style: "margin-bottom:14px" },
        h("div", null, unl ? "Lezioni illimitate nel tuo abbonamento" : left ? "Lezioni disponibili nei tuoi pacchetti: " + left : ctx.pending ? "Pacchetto in attesa di pagamento: si attiva quando Lorena riceve il pagamento." : "Nessun pacchetto di lezioni attivo: le lezioni si pagano singolarmente."),
        h("button", { class: "link small", onclick: function () { go("abbonamenti"); } }, left || unl ? "Dettagli" : "Vedi pacchetti"));
    })(),
    full ? h("p", { class: "small muted", style: "margin-top:-6px" }, "Hai già " + ctx.active_count + " lezioni prenotate, il massimo consentito. Potrai prenotarne un'altra dopo la prossima lezione.") : null,
    pushCard(),
    h("h2", null, "Prossime lezioni"),
    bks.length ? bks.map(function (b) { return myBookingCard(b, ctx); }) : h("div", { class: "card empty" }, "Nessuna lezione in programma."),
    queue.length ? [h("h2", null, "In coda"), h("div", { class: "card list" }, queue.map(function (x) {
      return h("div", { class: "item", style: "cursor:default" },
        h("div", null, h("div", null, slotLabel(x.starts_at)), h("div", { class: "small muted" }, MODE[x.mode] + (x.notified_at ? " · posto libero!" : " · ti avvisiamo se si libera"))),
        h("button", { class: "link small", onclick: async function () {
          try { await q(sb.rpc("leave_queue", { p_starts_at: x.starts_at })); toast("Hai lasciato la coda"); render(); } catch (e) { fail(e); }
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
            if (s.in_queue) { await q(sb.rpc("leave_queue", { p_starts_at: s.starts_at })); s.in_queue = false; toast("Hai lasciato la coda"); }
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
        bk.pay === "carta" ? h("div", { class: "tip" }, CARD_MSG) : null,
        ctx.pending ? h("div", { class: "tip" }, "Hai un pacchetto in attesa di pagamento: quando Lorena lo riceve, questa lezione verrà scalata dal pacchetto e non dovrai pagarla a parte.") : null];
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
  return [await plansAdmin(), h("div", { class: "card" },
    h("h3", null, "Prenotazioni"),
    h("div", { class: "grid2" }, field("Prezzo lezione in presenza (€)", "bs_pp", "text", st.price_presenza_eur, { inputmode: "decimal" }), field("Prezzo lezione online (€)", "bs_po", "text", st.price_online_eur, { inputmode: "decimal" })),
    h("p", { class: "small muted" }, "Il prezzo vale per chi non ha un abbonamento: alla prenotazione viene creato il pagamento da incassare (lo trovi in Scadenze)."),
    field("Lezioni prenotabili alla volta per cliente", "bs_max", "number", st.max_active_bookings, { inputmode: "numeric" }),
    field("Indirizzo della palestra (lo vede la cliente)", "bs_addr", "text", st.gym_address),
    field("Numero WhatsApp di Lorena (per il tasto “Scrivi a Lorena”)", "bs_wa", "tel", st.whatsapp_number, { placeholder: "es. 333 1234567" }),
    h("div", { class: "grid2" }, field("Intestatario conto (bonifici)", "bs_ih", "text", st.iban_holder), field("IBAN", "bs_ib", "text", st.iban)),
    field("Nota sotto il listino (la vede la cliente)", "bs_pn", "text", st.plans_note, { placeholder: "es. Tutti i piani comprendono consigli alimentari." }),
    field("Informativa privacy (la cliente la accetta al primo accesso)", "bs_pv", "textarea", st.privacy_text, { style: "min-height:240px" }),
    h("p", { class: "small muted" }, "Il testo attuale è una bozza: fallo verificare a un consulente privacy e completalo con i dati del titolare."),
    h("button", { class: "btn block", onclick: async function () {
      try {
        await q(sb.from("booking_settings").update({ price_presenza_eur: num("bs_pp"), price_online_eur: num("bs_po"), max_active_bookings: num("bs_max") || 3, gym_address: val("bs_addr"), whatsapp_number: val("bs_wa"), iban: val("bs_ib") ? val("bs_ib").replace(/\s/g, "").toUpperCase() : null, iban_holder: val("bs_ih"), plans_note: val("bs_pn"), privacy_text: val("bs_pv"), updated_at: new Date().toISOString() }).eq("id", 1));
        toast("Impostazioni salvate");
      } catch (e) { fail(e); }
    } }, "Salva"))];
};

/* =================== ABBONAMENTI E ACQUISTI =================== */
function durLabel(iv) {
  if (!iv) return "senza scadenza";
  var m = String(iv).match(/(\d+)\s*(year|mon|day)/); if (!m) return String(iv);
  var n = +m[1];
  if (m[2] === "year") return n === 1 ? "1 anno" : n + " anni";
  if (m[2] === "mon") return n === 1 ? "1 mese" : n + " mesi";
  if (n % 7 === 0) return (n / 7) + " settimane";
  return n + " giorni";
}
function lessonsLabel(n) { return n === null || n === undefined ? "lezioni illimitate" : n === 0 ? null : n === 1 ? "1 lezione" : n + " lezioni"; }
function copyBtn(text, label) {
  return h("button", { class: "btn ghost sm", onclick: function () {
    (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(function () { toast(label + " copiato"); }).catch(function () { toast(text); });
  } }, "Copia");
}
function ibanBox(st, amount, causale) {
  return h("div", { class: "card freed small" },
    h("div", { class: "eyebrow" }, "Dati per il bonifico"),
    h("div", { class: "kv" }, h("span", null, "Intestatario"), h("b", null, st.iban_holder || "—")),
    h("div", { class: "kv" }, h("span", null, "IBAN"), h("b", { style: "word-break:break-all" }, st.iban || "—"), st.iban ? copyBtn(st.iban.replace(/\s/g, ""), "IBAN") : null),
    amount !== null ? h("div", { class: "kv" }, h("span", null, "Importo"), h("b", null, euro(amount))) : null,
    causale ? h("div", { class: "kv" }, h("span", null, "Causale"), h("b", null, causale), copyBtn(causale, "Causale")) : null,
    h("p", { class: "muted", style: "margin:8px 0 0" }, "Fai il bonifico entro 3 giorni. Il pacchetto si attiva appena Lorena riceve il pagamento."));
}
VIEWS.abbonamenti = async function () {
  var r = await Promise.all([
    q(sb.from("plans").select("*").eq("active", true).order("position")),
    q(sb.from("subscriptions").select("*").eq("client_id", S.me.id).order("start_date", { ascending: false })),
    q(sb.from("payments").select("*").eq("client_id", S.me.id).eq("status", "da_pagare").order("due_date")),
    q(sb.from("booking_settings").select("iban, iban_holder, plans_note, price_presenza_eur, price_online_eur").eq("id", 1).single()),
    q(sb.from("bookings").select("subscription_id").eq("client_id", S.me.id).eq("status", "confermata").not("subscription_id", "is", null))
  ]);
  var plans = r[0], subs = r[1], pend = r[2], st = r[3], used = {};
  r[4].forEach(function (b) { used[b.subscription_id] = (used[b.subscription_id] || 0) + 1; });
  var tday = today();
  var active = subs.filter(function (s) {
    if (s.pending) return pend.some(function (p) { return p.subscription_id === s.id; });
    return !s.end_date || s.end_date >= tday;
  });
  var single = st.price_presenza_eur;
  return [
    h("h1", null, "Abbonamenti"),
    active.length ? [h("h2", null, "I tuoi pacchetti"), active.map(function (s) {
      var tot = s.lessons_included, u = used[s.id] || 0, left = tot === null ? null : Math.max(0, tot - u);
      var future = s.start_date > tday;
      var pay = pend.filter(function (p) { return p.subscription_id === s.id; })[0];
      if (s.pending) return h("div", { class: "card" },
        h("div", { class: "row" }, h("h3", { style: "margin:0" }, s.plan_name), h("span", { class: "pill warn" }, "in attesa di pagamento")),
        h("p", { class: "small", style: "margin:8px 0 0" }, "Si attiva quando Lorena riceve il pagamento" + (s.end_date ? ": la validità parte da quel giorno." : ".")
          + (tot ? " Le lezioni che prenoti nel frattempo verranno scalate dal pacchetto." : "")),
        pay ? h("div", { class: "tip" }, "Da pagare: " + euro(pay.amount_eur) + " · " + (pay.method === "Bonifico" ? "bonifico entro il " + fmtDate(pay.due_date) : "contanti a Lorena alla prossima lezione"),
          pay.method === "Bonifico" ? h("button", { class: "link small", style: "display:block;margin-top:6px", onclick: function () {
            modal("Dati per il bonifico", ibanBox(st, pay.amount_eur, (S.me.full_name || S.me.username) + " - " + s.plan_name));
          } }, "Vedi i dati per il bonifico") : null) : null,
        tot && pay && pay.method !== "Bonifico" ? h("button", { class: "btn ghost block", onclick: function () { S.bk = null; S.tab = "lezioni"; openView({ name: "prenota" }); } }, "Prenota la prima lezione") : null);
      return h("div", { class: "card" },
        h("div", { class: "row" }, h("h3", { style: "margin:0" }, s.plan_name), h("span", { class: "pill " + (future ? "off" : "ok") }, future ? "dal " + fmtDate(s.start_date) : "attivo")),
        tot ? h("div", { style: "margin-top:10px" }, h("div", { class: "row small" }, h("span", null, "Lezioni rimaste"), h("b", null, left + " di " + tot)),
          h("div", { class: "bar" }, h("i", { style: "width:" + Math.round((left / tot) * 100) + "%" }))) : (tot === null ? h("div", { class: "small", style: "margin-top:8px" }, "Lezioni illimitate") : null),
        h("div", { class: "small muted", style: "margin-top:8px" }, s.end_date ? "Valido fino al " + fmtDate(s.end_date) : "Senza scadenza"),
        pay ? h("div", { class: "tip" }, "Da pagare: " + euro(pay.amount_eur) + " · " + (pay.method === "Bonifico" ? "bonifico entro il " + fmtDate(pay.due_date) : "contanti alla prossima lezione"),
          pay.method === "Bonifico" ? h("button", { class: "link small", style: "display:block;margin-top:6px", onclick: function () {
            modal("Dati per il bonifico", ibanBox(st, pay.amount_eur, (S.me.full_name || S.me.username) + " - " + s.plan_name));
          } }, "Vedi i dati per il bonifico") : null) : null,
        tot && left > 0 && !future ? h("button", { class: "btn ghost block", onclick: function () { S.bk = null; S.tab = "lezioni"; openView({ name: "prenota" }); } }, "Prenota una lezione") : null);
    })] : null,
    h("h2", null, active.length ? "Acquista un altro pacchetto" : "Scegli il tuo pacchetto"),
    plans.map(function (p) {
      var ll = lessonsLabel(p.lessons);
      return h("div", { class: "card plan" },
        h("div", { class: "row", style: "align-items:flex-start" }, h("h3", { style: "margin:0" }, p.name), h("div", { class: "price" }, euro(p.price_eur), p.recurring ? h("small", null, "/mese") : null)),
        p.description ? h("p", { class: "small", style: "margin:8px 0" }, p.description) : null,
        h("div", { class: "chips" }, ll ? h("span", { class: "pill" }, ll) : null, h("span", { class: "pill off" }, p.recurring ? "rinnovo mensile" : "valido " + durLabel(p.duration))),
        h("button", { class: "btn block", onclick: function () { openView({ name: "acquista", plan: p.id }); } }, "Acquista"));
    }),
    single !== null && single !== undefined ? h("div", { class: "card row" }, h("div", null, h("h3", { style: "margin:0" }, "Lezione singola"), h("div", { class: "small muted" }, euro(single) + " · si prenota dal calendario e si paga dopo la lezione")),
      h("button", { class: "btn ghost sm", onclick: function () { S.bk = null; S.tab = "lezioni"; openView({ name: "prenota" }); } }, "Prenota")) : null,
    st.plans_note ? h("p", { class: "small muted", style: "text-align:center" }, st.plans_note) : null,
    h("h2", { style: "margin-top:18px" }, "Storico abbonamenti e pagamenti"),
    await subsView(S.me.id, null),
    h("div", { style: "height:10px" }),
    await paysView(S.me.id, null)
  ];
};
VIEWS.acquista = async function (v) {
  var r = await Promise.all([
    q(sb.from("plans").select("*").eq("id", v.plan).single()),
    q(sb.from("booking_settings").select("iban, iban_holder, plans_note").eq("id", 1).single())
  ]);
  var p = r[0], st = r[1], method = v.method || null;
  var box = h("div");
  var causale = (S.me.full_name || S.me.username) + " - " + p.name;
  var draw = function () {
    box.innerHTML = "";
    add(box, [
      h("div", { class: "card" }, h("div", { class: "eyebrow" }, "Il tuo pacchetto"),
        h("div", { class: "row", style: "align-items:flex-start" }, h("h2", { style: "margin:0" }, p.name), h("div", { class: "price" }, euro(p.price_eur), p.recurring ? h("small", null, "/mese") : null)),
        p.description ? h("p", { class: "small" }, p.description) : null,
        h("div", { class: "small muted" }, [lessonsLabel(p.lessons), p.recurring ? "1 mese, rinnovabile" : "valido " + durLabel(p.duration) + " dal pagamento"].filter(Boolean).join(" · "))),
      h("div", { class: "card" }, h("div", { class: "eyebrow" }, "Come vuoi pagare?"),
        h("div", { class: "opts" }, [["bonifico", "Bonifico", "entro 3 giorni"], ["contanti", "Contanti", "in presenza, alla prossima lezione"]].map(function (o) {
          return h("button", { class: "opt" + (method === o[0] ? " on" : ""), onclick: function () { method = o[0]; draw(); } }, h("strong", null, o[1]), h("span", null, o[2]));
        }))),
      method === "bonifico" ? ibanBox(st, p.price_eur, causale) : null,
      method === "contanti" ? h("div", { class: "tip", style: "margin-bottom:14px" }, "Paghi in contanti direttamente a Lorena alla prima lezione: puoi prenotarla subito. Il pacchetto si attiva quando Lorena registra il pagamento e quella lezione verrà scalata dal pacchetto.") : null,
      h("button", { class: "btn block", disabled: method ? null : true, onclick: async function (e) {
        e.target.disabled = true;
        try {
          await q(sb.rpc("purchase_plan", { p_plan: p.id, p_method: method }));
          go("abbonamenti");
          modal("Acquisto registrato", [
            h("p", { style: "margin-top:0" }, "Lorena è stata avvisata. «" + p.name + "» si attiva appena riceve il pagamento: ti arriverà una notifica."),
            method === "bonifico" ? ibanBox(st, p.price_eur, causale) : h("p", { class: "muted" }, "Porta " + euro(p.price_eur) + " in contanti alla prima lezione. Puoi già prenotarla: verrà scalata dal pacchetto."),
            p.lessons ? h("p", { class: "small muted" }, "Dopo l'attivazione le lezioni incluse si scalano da sole quando prenoti dal calendario.") : null
          ]);
        } catch (er) { fail(er); e.target.disabled = false; }
      } }, "Conferma acquisto · " + euro(p.price_eur)),
      h("p", { class: "small muted", style: "text-align:center" }, "Il pacchetto si attiva quando Lorena registra il pagamento. La validità parte da quel giorno.")
    ]);
  };
  draw();
  return [h("button", { class: "back", onclick: function () { go("abbonamenti"); } }, "‹ Abbonamenti"), h("h1", null, "Acquista"), box];
};

/* --- listino (admin, in Impostazioni) --- */
var DUR_OPTS = [["", "Nessuna scadenza"], ["28 days", "4 settimane"], ["42 days", "6 settimane"], ["56 days", "8 settimane"], ["1 month", "1 mese"], ["2 months", "2 mesi"], ["3 months", "3 mesi"], ["6 months", "6 mesi"], ["12 months", "12 mesi"]];
function durValue(iv) {
  if (!iv) return "";
  var m = String(iv).match(/(\d+)\s*(year|mon|day)/); if (!m) return "";
  if (m[2] === "year") return (+m[1] * 12) + " months";
  return m[2] === "mon" ? (m[1] === "1" ? "1 month" : m[1] + " months") : m[1] + " days";
}
async function plansAdmin() {
  var ps = await q(sb.from("plans").select("*").order("position"));
  return h("div", { class: "card" },
    h("div", { class: "row" }, h("h3", { style: "margin:0" }, "Listino pacchetti"), h("button", { class: "btn sm", onclick: function () { editPlan(); } }, "+ Pacchetto")),
    h("p", { class: "small muted" }, "Sono i pacchetti che le clienti vedono e acquistano in Abbonamenti. Tocca un pacchetto per modificarlo."),
    h("div", { class: "list" }, ps.map(function (p) {
      return h("div", { class: "item", onclick: function () { editPlan(p); } },
        h("div", null, h("div", null, p.name), h("div", { class: "small muted" }, [euro(p.price_eur) + (p.recurring ? "/mese" : ""), lessonsLabel(p.lessons), p.recurring ? "rinnovo mensile" : durLabel(p.duration)].filter(Boolean).join(" · "))),
        p.active ? h("span", { class: "muted" }, "›") : h("span", { class: "pill off" }, "nascosto"));
    })));
}
function editPlan(p) {
  p = p || { active: true, recurring: false, lessons: 0 };
  modal(p.id ? "Modifica pacchetto" : "Nuovo pacchetto", [
    field("Nome", "pl_n", "text", p.name, { placeholder: "es. 10 lezioni one to one" }),
    field("Descrizione (la vede la cliente)", "pl_d", "textarea", p.description),
    h("div", { class: "grid2" }, field("Prezzo (€)", "pl_p", "text", p.price_eur, { inputmode: "decimal" }),
      field("Lezioni incluse", "pl_l", "number", p.lessons, { inputmode: "numeric", placeholder: "vuoto = illimitate" })),
    h("p", { class: "small muted", style: "margin-top:0" }, "Lezioni incluse: 0 se il pacchetto non comprende lezioni prenotabili (es. solo scheda)."),
    select("Durata dall'acquisto", "pl_t", DUR_OPTS, durValue(p.duration)),
    h("label", { style: "display:flex;gap:8px;align-items:center;text-transform:none;letter-spacing:0;font-size:.9rem;margin-top:12px" }, h("input", { type: "checkbox", id: "pl_r", checked: p.recurring ? true : null, style: "width:auto" }), "Rinnovo mensile (avviso alla cliente 3 giorni prima della scadenza)"),
    h("label", { style: "display:flex;gap:8px;align-items:center;text-transform:none;letter-spacing:0;font-size:.9rem;margin-top:8px" }, h("input", { type: "checkbox", id: "pl_a", checked: p.active ? true : null, style: "width:auto" }), "Visibile alle clienti"),
    field("Ordine nel listino", "pl_o", "number", p.position || 0, { inputmode: "numeric" }),
    p.id ? h("p", { class: "small muted" }, "Le modifiche valgono per i nuovi acquisti; gli abbonamenti già venduti restano come sono.") : null
  ], async function () {
    var row = { name: val("pl_n"), description: val("pl_d"), price_eur: num("pl_p"), lessons: num("pl_l"), duration: $("#pl_t").value || null,
      recurring: $("#pl_r").checked, active: $("#pl_a").checked, position: num("pl_o") || 0 };
    if (!row.name || row.price_eur === null) { toast("Inserisci nome e prezzo"); return false; }
    if (p.id) await q(sb.from("plans").update(row).eq("id", p.id)); else await q(sb.from("plans").insert(row));
    toast("Listino aggiornato"); render();
  });
}
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
    h("button", { class: "link small", style: "margin:0 0 14px", onclick: showPrivacyText }, "Informativa privacy"),
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
document.addEventListener("visibilitychange", function () { if (document.visibilityState === "visible" && S.me) { updateBell(); flushOutbox(); } });
window.addEventListener("online", function () { if (S.me) flushOutbox(); });
boot();
