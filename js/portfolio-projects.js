/*
  Central project catalog for the portfolio.
  Future projects should be added here once their case study is ready.
  The homepage and project hub both render from this file.
*/
window.PORTFOLIO_PROJECTS = [
  {
    id: "INFRA-BASE-v1",
    number: "01",
    title: "Enterprise Cybersecurity Homelab Infrastructure",
    domain: "Foundation & Infrastructure",
    domainKey: "foundation",
    status: "Completed baseline",
    description: "A home-built enterprise lab with segmented departments, Active Directory, file services, firewall policy, and a tested backup and recovery baseline.",
    skills: ["Proxmox", "OPNsense", "Active Directory", "Windows Server", "VLANs"],
    href: "project-enterprise-proxmox-lab.html",
    pdf: "assets/infra-base-v1.pdf",
    featured: true,
    published: true
  },
  {
    id: "SOC01",
    number: "02",
    title: "Enterprise Security Monitoring & Telemetry Platform",
    domain: "Security Operations",
    domainKey: "soc",
    status: "Completed platform",
    description: "A SOC platform that centralizes Windows, Linux, and network telemetry in Wazuh, with Suricata and Zeek running on a passive sensor.",
    skills: ["Wazuh", "Sysmon", "Suricata", "Zeek", "auditd"],
    href: "project-soc01.html",
    pdf: "assets/soc01.pdf",
    featured: true,
    published: true
  },
  {
    id: "REMOTE01",
    number: "REMOTE01",
    title: "Secure Proxmox Remote Access with Tailscale",
    domain: "Supporting Infrastructure",
    domainKey: "supporting",
    status: "Completed and validated",
    description: "A secure remote-management path for Proxmox using a dedicated unprivileged Ubuntu LXC container, Tailscale subnet routing, a host-only /32 route, and narrowly scoped access to TCP 8006.",
    skills: ["Proxmox", "Tailscale", "Linux Routing", "LXC", "Access Control"],
    href: "project-remote01.html",
    pdf: "",
    featured: false,
    supporting: true,
    published: true
  },
  {
    id: "DET01",
    number: "03",
    title: "Authentication Attack Detection & Investigation",
    domain: "Detection Engineering",
    domainKey: "detection",
    status: "Completed and validated",
    description: "A detection-engineering lab focused on repeated Kerberos authentication failures, Wazuh correlation, source and account separation, timing windows, negative testing, and analyst investigation.",
    skills: ["Wazuh", "Kerberos", "Windows Event 4771", "Correlation", "Detection Tuning"],
    href: "project-det01.html",
    pdf: "assets/det01.pdf",
    featured: true,
    published: true
  },
  {
    id: "ID01",
    number: "04",
    title: "Active Directory Identity Abuse & Privilege Monitoring",
    domain: "Identity Security",
    domainKey: "identity",
    status: "Completed and validated",
    description: "An identity-security lab covering AD account lifecycle events, privileged-group changes, Administrator activity, actor-target attribution, logon-session correlation, and negative testing.",
    skills: ["Active Directory", "Wazuh", "Windows Security Events", "MITRE ATT&CK", "Identity Investigation"],
    href: "project-id01.html",
    pdf: "assets/id01.pdf",
    featured: true,
    published: true
  }
];

window.PORTFOLIO_ROADMAP = [
  { key: "networking", label: "Networking", stage: "foundation", state: "foundation", note: "Cisco coursework and network design", visible: false },
  { key: "foundation", label: "Infrastructure Foundation", stage: "foundation", state: "active", note: "INFRA-BASE-v1", directHref: "project-enterprise-proxmox-lab.html", visible: true },
  { key: "sysadmin", label: "Systems Administration", stage: "foundation", state: "foundation", note: "Core Windows and Linux administration", visible: false },

  { key: "soc", label: "Security Monitoring / SOC", stage: "soc", state: "active", note: "SOC01", directHref: "project-soc01.html", visible: true },

  { key: "detection", label: "Detection Engineering", stage: "tracks", state: "active", note: "Custom detections and investigations", visible: true },
  { key: "identity", label: "Identity Security", stage: "tracks", state: "active", note: "AD → PAM → Zero Trust → NHI", visible: true },
  { key: "ai", label: "AI / ML Security", stage: "tracks", state: "next", note: "SOC copilots, agents, ML, AI security", visible: false },

  { key: "cloud", label: "Cloud Security", stage: "advanced", state: "planned", note: "Azure / AWS / hybrid identity", visible: false },
  { key: "threat-hunting", label: "Threat Hunting", stage: "advanced", state: "planned", note: "Multi-source investigations", visible: false },
  { key: "vulnerability", label: "Vulnerability Management", stage: "advanced", state: "planned", note: "Discovery, prioritization, remediation", visible: false },

  { key: "ir", label: "Incident Response / DFIR", stage: "response", state: "planned", note: "Triage, containment, forensics", visible: false },
  { key: "automation", label: "Security Automation", stage: "response", state: "planned", note: "Python, APIs, SOAR-style workflows", visible: false },
  { key: "malware", label: "Malware Analysis", stage: "response", state: "planned", note: "Controlled behavior analysis", visible: false },
  { key: "purple", label: "Purple / Red Team", stage: "response", state: "planned", note: "Adversary simulation and validation", visible: false }
];

window.PORTFOLIO_STAGES = [
  { key: "foundation", number: "01", label: "Foundation", description: "Networking, infrastructure, identity basics, and systems administration." },
  { key: "soc", number: "02", label: "Security Operations", description: "Centralized endpoint, server, and network telemetry." },
  { key: "tracks", number: "03", label: "Core Security Tracks", description: "Detection engineering, modern identity security, and AI/ML security." },
  { key: "advanced", number: "04", label: "Advanced Capabilities", description: "Cloud security, threat hunting, and vulnerability management." },
  { key: "response", number: "05", label: "Response & Automation", description: "Incident response, DFIR, automation, malware analysis, and adversary validation." }
];

(function () {
  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    }[c]));
  }

  const params = new URLSearchParams(window.location.search);
  const domainFilter = params.get("domain");
  const activeDomain = window.PORTFOLIO_ROADMAP.find(item => item.key === domainFilter);

  function projectCard(project) {
    const title = project.published && project.href
      ? `<a href="${esc(project.href)}">${esc(project.title)}</a>`
      : esc(project.title);

    const action = project.published && project.href
      ? `<a class="text-link" href="${esc(project.href)}">Read the case study →</a>`
      : `<span class="case-study-pending">Case study being finalized</span>`;

    return `
      <article class="project-card">
        <div class="project-number">${esc(project.number)} / ${esc(project.domain).toUpperCase()}</div>
        <div>
          <span class="status ${project.published ? "" : "status-progress"}">${esc(project.status)}</span>
          <h2>${title}</h2>
          <p>${esc(project.id)}</p>
          <p>${esc(project.description)}</p>
          <div class="tags">${project.skills.map(skill => `<span>${esc(skill)}</span>`).join("")}</div>
          ${action}
        </div>
      </article>`;
  }

  document.querySelectorAll("[data-project-list]").forEach(container => {
    const mode = container.dataset.projectList;
    let projects = window.PORTFOLIO_PROJECTS.filter(project => {
      if (mode === "featured") return project.featured && project.published;
      if (mode === "supporting") return project.supporting && project.published;
      if (mode === "published") return project.published;
      return true;
    });

    if (domainFilter && mode !== "featured" && mode !== "supporting") {
      projects = projects.filter(project => project.domainKey === domainFilter);
    }

    container.innerHTML = projects.length
      ? projects.map(projectCard).join("")
      : `<div class="empty-state"><strong>No published case studies in this domain yet.</strong><p>This area is part of the portfolio roadmap and will activate as the work is completed and documented.</p></div>`;
  });

  document.querySelectorAll("[data-roadmap]").forEach(container => {
    const projectCounts = window.PORTFOLIO_PROJECTS.reduce((counts, project) => {
      counts[project.domainKey] = (counts[project.domainKey] || 0) + 1;
      return counts;
    }, {});

    function node(item) {
      const count = projectCounts[item.key] || 0;
      const meta = item.directHref
        ? item.note
        : count
          ? `${count} project${count === 1 ? "" : "s"}`
          : item.note;

      const current = domainFilter === item.key ? " roadmap-current" : "";
      const inner = `
        <span class="roadmap-state">${esc(item.state === "active" ? "ACTIVE" : item.state === "next" ? "NEXT" : item.state === "foundation" ? "FOUNDATION" : "PLANNED")}</span>
        <strong>${esc(item.label)}</strong>
        <small>${esc(meta)}</small>`;

      if (item.directHref) {
        return `<a class="roadmap-node roadmap-${esc(item.state)}${current}" href="${esc(item.directHref)}">${inner}</a>`;
      }

      return count
        ? `<a class="roadmap-node roadmap-${esc(item.state)}${current}" href="projects.html?domain=${encodeURIComponent(item.key)}#project-catalog">${inner}</a>`
        : `<div class="roadmap-node roadmap-${esc(item.state)}">${inner}</div>`;
    }

    const visibleStages = window.PORTFOLIO_STAGES
      .map(stage => ({
        ...stage,
        items: window.PORTFOLIO_ROADMAP.filter(item => item.stage === stage.key && item.visible !== false)
      }))
      .filter(stage => stage.items.length);

    container.innerHTML = visibleStages.map((stage, index) => {
      return `
        <div class="roadmap-stage">
          <div class="roadmap-stage-heading">
            <span>${esc(stage.number)}</span>
            <div><strong>${esc(stage.label)}</strong><small>${esc(stage.description)}</small></div>
          </div>
          <div class="roadmap-stage-nodes roadmap-stage-${esc(stage.key)}">
            ${stage.items.map(node).join("")}
          </div>
        </div>
        ${index < visibleStages.length - 1 ? '<div class="roadmap-arrow" aria-hidden="true">↓</div>' : ''}`;
    }).join("");
  });

  document.querySelectorAll("[data-domain-section]").forEach(section => {
    section.hidden = !activeDomain;
  });

  document.querySelectorAll("[data-supporting-section]").forEach(section => {
    section.hidden = Boolean(activeDomain);
  });

  document.querySelectorAll("[data-domain-heading]").forEach(el => {
    if (activeDomain) el.textContent = `${activeDomain.label} projects`;
  });

  document.querySelectorAll("[data-domain-reset]").forEach(el => {
    el.hidden = !activeDomain;
  });
})();
