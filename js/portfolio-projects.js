/* ==========================================================================
   PROJECT CATALOG — the only file you edit to publish a project.
   The homepage, the Projects page, the lab pipeline, and the previous/next
   links on case-study pages all build themselves from this list.

   To publish a new project:
     1. Copy templates/project-template.html to project-<id>.html, fill it in,
        and put its PDF + screenshots in assets/.
     2. Add one object to PORTFOLIO_PROJECTS below (copy an existing one).
        If it was listed in PORTFOLIO_UPCOMING, delete it from there.
   Order matters: projects appear in this order (and previous/next follow it).

   Field guide
     id        Short code shown on the card ("DET02").
     title     Full project title.
     domain    One of the keys in PORTFOLIO_DOMAINS.
     stage     Where it sits in the lab pipeline: build | monitor | detect | analyze
     summary   1–2 sentences: what you built and why.
     proof     One line of hard evidence (numbers, tests, results).
     skills    4–6 tags.
     href/pdf  Case-study page and PDF.
     thumb     Screenshot used as the card image (top-left is what shows).
     featured  0 = not on homepage. 1 = big spotlight card, 2+ = homepage order.
     rules     Optional: number of custom detection rules (adds to the homepage total).
   ========================================================================== */

window.PORTFOLIO_DOMAINS = {
  foundation: "Infrastructure",
  soc: "Security Operations",
  detection: "Detection Engineering",
  identity: "Identity Security",
  ai: "AI Security",
  networking: "Networking",
  supporting: "Lab Enhancement"
};

window.PORTFOLIO_PROJECTS = [
  {
    id: "INFRA-BASE-v1",
    title: "Enterprise Cybersecurity Homelab Infrastructure",
    domain: "foundation",
    stage: "build",
    summary: "A segmented enterprise built on Proxmox and OPNsense: Active Directory, DNS/DHCP, Group Policy, department file shares, and service-based firewall rules between segments.",
    proof: "8 VMs · 4 department VLANs · AGDLP permissions · 2 TB backup target",
    skills: ["Proxmox", "OPNsense", "Active Directory", "Group Policy", "VLANs"],
    href: "project-enterprise-proxmox-lab.html",
    pdf: "assets/infra-base-v1.pdf",
    thumb: "assets/infra-base-v1/architecture.png",
    featured: 5,
    published: true
  },
  {
    id: "SOC01",
    title: "Enterprise Security Monitoring & Telemetry Platform",
    domain: "soc",
    stage: "monitor",
    summary: "Centralized Windows, Linux, and network telemetry in Wazuh, with Suricata and Zeek on a passive sensor fed by Proxmox traffic mirroring.",
    proof: "7 Wazuh agents · Sysmon + auditd · Suricata + Zeek · 8/8 pipeline tests passed",
    skills: ["Wazuh", "Sysmon", "Suricata", "Zeek", "auditd"],
    href: "project-soc01.html",
    pdf: "assets/soc01.pdf",
    thumb: "assets/soc01/suricata-alert-in-wazuh.png",
    featured: 4,
    published: true
  },
  {
    id: "DET01",
    title: "Authentication Attack Detection & Investigation",
    domain: "detection",
    stage: "detect",
    summary: "Wazuh correlation for repeated Kerberos failures (Event 4771), grouped by account and source, then tested against the cases that should stay quiet.",
    proof: "2 custom rules · 1 positive + 4 negative tests · 120 s window · T1110.001",
    skills: ["Wazuh", "Kerberos", "Event 4771", "Correlation", "Detection Tuning"],
    href: "project-det01.html",
    pdf: "assets/det01.pdf",
    thumb: "assets/det01/correlation-alert.png",
    featured: 2,
    rules: 2,
    published: true
  },
  {
    id: "ID01",
    title: "Active Directory Identity Abuse & Privilege Monitoring",
    domain: "identity",
    stage: "detect",
    summary: "Detections for account lifecycle events, Domain Admins changes, and privileged Administrator activity, built to answer who did it and what was affected.",
    proof: "9 custom rules · 9 event types · 4 ATT&CK mappings · negative control",
    skills: ["Active Directory", "Wazuh", "Windows Security Events", "MITRE ATT&CK"],
    href: "project-id01.html",
    pdf: "assets/id01.pdf",
    thumb: "assets/id01/domain-admin-addition.png",
    featured: 3,
    rules: 9,
    published: true
  },
  {
    id: "AI01",
    title: "AI-Assisted SOC Analyst",
    domain: "ai",
    stage: "analyze",
    summary: "An analyst workspace that turns Wazuh, Zeek, and Suricata alerts into source-aware incidents, saves cases, and requests evidence-grounded AI analysis that states what it doesn't know.",
    proof: "39 Python tests passed · 3/3 live scenarios · human-in-the-loop by design",
    skills: ["Python", "Wazuh", "Zeek", "Suricata", "Azure AI"],
    href: "project-ai01.html",
    pdf: "assets/ai01.pdf",
    thumb: "assets/ai01/workspace.png",
    featured: 1,
    published: true
  },
  {
    id: "NET01",
    title: "Segmented Office Network with Cisco Switching & Routing",
    domain: "networking",
    stage: "build",
    summary: "The INFRA-BASE-v1 design rebuilt in Cisco Packet Tracer: six VLANs, 802.1Q trunks, router-on-a-stick, and four DHCP pools.",
    proof: "6 VLANs · 2 switches · 4 DHCP leases verified",
    skills: ["Cisco IOS", "VLANs & Trunking", "Inter-VLAN Routing", "DHCP"],
    href: "project-net01.html",
    pdf: "assets/net01.pdf",
    thumb: "assets/net01/topology.svg",
    featured: 0,
    published: true
  },
  {
    id: "NET02",
    title: "Tracing & Containing Suspicious Network Endpoints",
    domain: "networking",
    stage: "build",
    summary: "Traced three flagged MAC addresses through an unfamiliar network with MAC tables and CDP, disabled their ports, and confirmed everything else stayed up.",
    proof: "3 MACs traced · 3 ports contained · 8 hosts still responding",
    skills: ["Cisco IOS", "MAC Tracing", "CDP", "Containment"],
    href: "project-net02.html",
    pdf: "assets/net02.pdf",
    thumb: "assets/net02/challenge-topology.png",
    featured: 0,
    published: true
  },
  {
    id: "NET03",
    title: "Access Switch Replacement, Migration & Rollback",
    domain: "networking",
    stage: "build",
    summary: "A planned access-switch replacement with a port inventory, staged configuration, DHCP renewal tests, and a rehearsed rollback before final cutover.",
    proof: "3 VLANs preserved · rollback rehearsed · 6/6 final tests passed",
    skills: ["Cisco IOS", "Change Management", "VLANs & Trunking", "Rollback"],
    href: "project-net03.html",
    pdf: "assets/net03.pdf",
    thumb: "assets/net03/final-topology.png",
    featured: 0,
    published: true
  },
  {
    id: "REMOTE01",
    title: "Secure Proxmox Remote Access with Tailscale",
    domain: "supporting",
    stage: "build",
    summary: "Private remote management for Proxmox through an unprivileged LXC gateway, a single /32 subnet route, and access limited to TCP 8006. No port forwarding.",
    proof: "1 LXC gateway · /32 route · only TCP 8006 reachable",
    skills: ["Proxmox", "Tailscale", "Linux Routing", "LXC", "Least Privilege"],
    href: "project-remote01.html",
    pdf: "assets/remote01.pdf",
    thumb: "assets/remote01/management-network.png",
    featured: 0,
    published: true
  }
];

/* What's coming next. The first entry is shown as "In progress".
   When one is published, delete it here and add it above. */
window.PORTFOLIO_UPCOMING = [
  { id: "DET02", title: "Suspicious PowerShell Detection & Investigation", stage: "detect" },
  { id: "ID02", title: "Credential Abuse & Lateral Authentication", stage: "detect" },
  { id: "AI02", title: "Secure Homelab AI Agent", stage: "analyze" },
  { id: "DET03", title: "Persistence Detection & Investigation", stage: "detect" },
  { id: "IR01", title: "Windows Endpoint Incident Response", stage: "respond" }
];

/* Pipeline stages shown in "How the lab fits together". */
window.PORTFOLIO_STAGES = [
  { key: "build", label: "Build", text: "Segmented network, Active Directory, and secure administration." },
  { key: "monitor", label: "Monitor", text: "Endpoint, server, and network telemetry in one place." },
  { key: "detect", label: "Detect", text: "Custom rules, validated with positive and negative tests." },
  { key: "analyze", label: "Analyze", text: "Correlation and AI-assisted triage with the analyst in control." },
  { key: "respond", label: "Respond", text: "Incident response, forensics, and automation." }
];

/* ==========================================================================
   Rendering — no need to edit below this line.
   ========================================================================== */
(function () {
  const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c]));
  const D = window.PORTFOLIO_DOMAINS;
  const all = window.PORTFOLIO_PROJECTS.filter(p => p.published);

  function card(p, spotlight) {
    const media = p.thumb
      ? `<div class="pcard-media"><img src="${esc(p.thumb)}" alt="" loading="lazy"></div>` : "";
    return `<article class="pcard${spotlight ? " spotlight" : ""}">
      ${media}
      <div class="pcard-body">
        ${spotlight ? '<span class="spot-label">Latest project</span>' : ""}
        <div class="pcard-meta"><span class="chip-id">${esc(p.id)}</span><span class="chip-domain">${esc(D[p.domain] || p.domain)}</span></div>
        <h3><a href="${esc(p.href)}">${esc(p.title)}</a></h3>
        <p>${esc(p.summary)}</p>
        ${p.proof ? `<div class="proof-line">${esc(p.proof)}</div>` : ""}
        <div class="tags">${(p.skills || []).map(s => `<span>${esc(s)}</span>`).join("")}</div>
        <div class="pcard-links"><a href="${esc(p.href)}">Case study →</a>${p.pdf ? `<a href="${esc(p.pdf)}">PDF report ↗</a>` : ""}</div>
      </div>
    </article>`;
  }

  /* Homepage featured grid */
  document.querySelectorAll("[data-featured]").forEach(el => {
    const f = all.filter(p => p.featured > 0).sort((a, b) => a.featured - b.featured);
    el.innerHTML = f.map((p, i) => card(p, i === 0 && p.featured === 1)).join("");
  });

  /* Auto-computed numbers: <span data-count="projects|rules"> */
  const counts = {
    projects: all.length,
    rules: all.reduce((n, p) => n + (p.rules || 0), 0)
  };
  document.querySelectorAll("[data-count]").forEach(el => { el.textContent = counts[el.dataset.count] ?? ""; });
  const nextUp = (window.PORTFOLIO_UPCOMING || [])[0];
  document.querySelectorAll("[data-next-project]").forEach(el => {
    el.textContent = nextUp ? `${nextUp.id} · ${nextUp.title}` : "Next project in planning";
  });

  /* Projects page: filters + grid. Supports ?domain=key links. */
  document.querySelectorAll("[data-catalog]").forEach(el => {
    const filters = document.querySelector("[data-filters]");
    const used = Object.keys(D).filter(k => all.some(p => p.domain === k));
    let current = new URLSearchParams(location.search).get("domain");
    if (!used.includes(current)) current = "all";

    function draw() {
      const list = current === "all" ? all : all.filter(p => p.domain === current);
      el.innerHTML = list.length ? list.map(p => card(p)).join("") : `<div class="empty-state">No case studies here yet.</div>`;
      if (filters) filters.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.key === current)));
    }
    if (filters) {
      filters.innerHTML = [["all", "All", all.length], ...used.map(k => [k, D[k], all.filter(p => p.domain === k).length])]
        .map(([k, l, n]) => `<button type="button" data-key="${esc(k)}">${esc(l)}<small>${n}</small></button>`).join("");
      filters.addEventListener("click", e => {
        const b = e.target.closest("button"); if (!b) return;
        current = b.dataset.key; draw();
        const url = new URL(location.href);
        if (current === "all") url.searchParams.delete("domain"); else url.searchParams.set("domain", current);
        history.replaceState(null, "", url);
      });
    }
    draw();
  });

  /* Lab pipeline */
  document.querySelectorAll("[data-pipeline]").forEach(el => {
    const up = window.PORTFOLIO_UPCOMING || [];
    el.innerHTML = window.PORTFOLIO_STAGES.map((s, i) => {
      const done = all.filter(p => p.stage === s.key && p.domain !== "networking" && p.domain !== "supporting");
      const later = up.filter(u => u.stage === s.key);
      const isNext = later.some(u => u === up[0]);
      const items = [
        ...done.map(p => `<li><a href="${esc(p.href)}">${esc(p.id)} ✓</a></li>`),
        ...later.map(u => `<li><span class="${u === up[0] ? "next" : "planned"}" title="${esc(u.title)}">${esc(u.id)} · ${u === up[0] ? "in progress" : "planned"}</span></li>`)
      ].join("");
      return `<div class="stage${isNext ? " is-next" : ""}"><span class="stage-num">0${i + 1}</span><h3>${esc(s.label)}</h3><p>${esc(s.text)}</p><ul>${items}</ul></div>`;
    }).join("");
  });
})();
