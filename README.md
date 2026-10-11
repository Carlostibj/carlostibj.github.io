# Carlos Tiburcio — Portfolio

Live site: https://carlostibj.github.io

Plain HTML and CSS on GitHub Pages. No installation, build step, JavaScript, or paid service is required for the main portfolio.

## Files you will edit

| File | Purpose |
| --- | --- |
| `index.html` | Introduction, featured project, skills, contact |
| `projects.html` | All completed project cards |
| `project-enterprise-proxmox-lab.html` | INFRA-BASE-v1 case study |
| `certifications.html` | Credentials and education |
| `experience.html` | Independent IT labs, training, and opportunity statement |
| `assets/style.css` | Shared colors, spacing, typography, responsive layout |
| `assets/infra-base-v1.pdf` | Full evidence document |
| `templates/` | Reusable starting points for future projects |

## Edit text on GitHub

1. Open the file in this repository, then select the pencil (Edit).
2. Change the text between the HTML tags, preserving the tags. For example, `<h1>My title</h1>`.
3. Select Preview or inspect the diff, then commit your change to `main`.
4. Wait for GitHub Pages to finish deploying, then refresh the live page.

## Add a completed project

1. Copy `templates/project-template.html` into a new file at the repository root, such as `project-soc01.html`. Use **Add file → Create new file** on GitHub and paste the template contents.
2. Replace the sample title, description, objective, implementation, tests, and lessons with your actual work. Remove the template comment.
3. Upload supporting PDFs or images into `assets/`. Link to them with relative paths such as `assets/soc01.pdf`. Add useful `alt` text for images.
4. Copy the article from `templates/project-card.html` into `projects.html`, below the existing card. Update its number, title, status, description, tags, and both links to your new page.
5. If you want to feature it, replace the project article on `index.html` with the new card too.
6. Commit and check the live links on your phone and desktop.

Only add completed case studies for now. Use clear scope and status; lab work is independent simulated experience, not employment or client work. Do not claim a restore test merely because a backup succeeded.

## Replace the INFRA PDF

Upload a replacement with the same name, `assets/infra-base-v1.pdf`. Existing links will keep working. Update the case study text if scope or outcomes change.

## Navigation and styling

Each page includes its own small header and footer to keep the site build-free. If you change navigation or your email, update it across the main HTML pages. To change the palette, edit the variables at the top of `assets/style.css`.

The previous category URLs redirect to `projects.html` so old links still lead somewhere useful. Existing legacy CSS/JS files are retained but the new pages do not depend on them.

## Preview locally (optional)

From the repository folder: `python3 -m http.server 8000`, then visit `http://localhost:8000`. Otherwise edit directly in GitHub and check Pages after deployment.

## Contact and skills

Public contact uses only `carlomtj15@gmail.com`. The homepage lists the broader technical toolkit; each project page documents the skills actually demonstrated by that project. The Experience page presents independent technical practice and training, without unrelated work history.

Contact buttons open Gmail compose in a new tab. The correct address, `carlomtj15@gmail.com`, is also visible for visitors using another email service. Gmail links only open a draft; they do not send a message.
