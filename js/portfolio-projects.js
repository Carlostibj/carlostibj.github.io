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
    id: "DET01",
    number: "03",
    title: "Authentication Attack Detection & Investigation",
    domain: "Detection Engineering",
    domainKey: "detection",
    status: "Technical work complete",
    description: "A detection-engineering lab focused on repeated Kerberos authentication failures, Wazuh correlation, source and account separation, timing windows, negative testing, and analyst investigation.",
    skills: ["Wazuh", "Kerberos", "Windows Event 4771", "Correlation", "Detection Tuning"],
    href: "",
    pdf: "",
    featured: true,
    published: false
  }
];

window.PORTFOLIO_ROADMAP = [
  { key: "networking", label: "Networking", state: "foundation", note: "Cisco coursework and network design" },
  { key: "foundation", label: "Infrastructure Foundation", state: "active", note: "INFRA-BASE-v1", directHref: "project-enterprise-proxmox-lab.html" },
  { key: "sysadmin", label: "Systems Administration", state: "foundation", note: "Built into the infrastructure track" },
  { key: "soc", label: "Security Monitoring / SOC", state: "active", note: "SOC01", directHref: "project-soc01.html" },
  { key: "detection", label: "Detection Engineering", state: "active", note: "DET01+" },
  { key: "identity", label: "Identity Security", state: "next", note: "AD → PAM → Zero Trust → NHI" },
  { key: "ai", label: "AI / ML Security", state: "next", note: "SOC copilots, agents, ML, AI security" },
  { key: "cloud", label: "Cloud Security", state: "planned", note: "Azure / AWS / hybrid identity" },
  { key: "threat-hunting", label: "Threat Hunting", state: "planned", note: "Multi-source investigations" },
  { key: "vulnerability", label: "Vulnerability Management", state: "planned", note: "Discovery, prioritization, remediation" },
  { key: "automation", label: "Security Automation", state: "planned", note: "Python, APIs, SOAR-style workflows" },
  { key: "ir", label: "Incident Response / DFIR", state: "planned", note: "Triage, containment, forensics" },
  { key: "purple", label: "Purple / Red Team", state: "planned", note: "Adversary simulation and validation" },
  { key: "malware", label: "Malware Analysis", state: "planned", note: "Controlled behavior analysis" }
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
      if (mode === "published") return project.published;
      return true;
    });

    if (domainFilter && mode !== "featured") {
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

    container.innerHTML = window.PORTFOLIO_ROADMAP.map(item => {
      const count = projectCounts[item.key] || 0;
      const meta = count ? `${count} project${count === 1 ? "" : "s"}` : item.note;
      const current = domainFilter === item.key ? " roadmap-current" : "";
      const content = `
        <span class="roadmap-state">${esc(item.state === "active" ? "ACTIVE" : item.state === "next" ? "NEXT" : item.state === "foundation" ? "FOUNDATION" : "PLANNED")}</span>
        <strong>${esc(item.label)}</strong>
        <small>${esc(meta)}</small>`;

      if (item.directHref) {
        return `<a class="roadmap-node roadmap-${esc(item.state)}${current}" href="${esc(item.directHref)}">${content}</a>`;
      }

      return count
        ? `<a class="roadmap-node roadmap-${esc(item.state)}${current}" href="projects.html?domain=${encodeURIComponent(item.key)}#project-catalog">${content}</a>`
        : `<div class="roadmap-node roadmap-${esc(item.state)}">${content}</div>`;
    }).join("");
  });

  document.querySelectorAll("[data-domain-heading]").forEach(el => {
    if (activeDomain) el.textContent = `${activeDomain.label} projects`;
  });

  document.querySelectorAll("[data-domain-reset]").forEach(el => {
    el.hidden = !activeDomain;
  });
})();
