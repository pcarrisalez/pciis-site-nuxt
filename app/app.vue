<script setup lang="ts">
import { experienceGroups, projectCards, services, skills } from './data/site'

const contactEmail = 'phillip@pciis.com'
const phone = '419-341-3740'
</script>

<template>
  <div>
    <header class="site-header">
      <a class="brand" href="#top" aria-label="PCIIS home">
        <span class="brand-mark">PC</span>
        <span>
          <strong>PCIIS</strong>
          <small>Integrated Information Solutions</small>
        </span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#services">Services</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Work</a>
        <a href="#contact" class="nav-cta">Contact</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero section-shell">
        <div class="hero-copy">
          <p class="eyebrow">Small business IT • Software support • Technical problem solving</p>
          <h1>Practical technology help for local businesses that need things to work.</h1>
          <p class="lede">
            PCIIS helps small businesses, professional offices, restaurants, retail shops, and nonprofits solve technology problems without overcomplicating the answer.
          </p>
          <div class="hero-actions">
            <a class="button primary" :href="`mailto:${contactEmail}`">Start a conversation</a>
            <a class="button secondary" href="#services">View services</a>
          </div>
        </div>
        <aside class="hero-card" aria-label="Key capabilities">
          <h2>Support areas</h2>
          <ul>
            <li>Networking, device, and workstation troubleshooting</li>
            <li>Virus removal and practical security cleanup support</li>
            <li>Third-party software and SaaS implementation support</li>
            <li>Reporting, databases, integrations, and technical documentation</li>
          </ul>
        </aside>
      </section>

      <section id="services" class="section-shell split-heading">
        <div>
          <p class="eyebrow">What PCIIS does</p>
          <h2>Useful support across everyday business technology.</h2>
        </div>
        <p>
          The focus is simple: understand the business need, stabilize the current process, and provide a maintainable solution that owners and staff can actually use.
        </p>
      </section>

      <section class="section-shell service-grid" aria-label="Services">
        <article v-for="service in services" :key="service.title" class="card service-card">
          <h3>{{ service.title }}</h3>
          <p>{{ service.body }}</p>
          <ul>
            <li v-for="item in service.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </section>

      <section id="experience" class="section-shell experience-panel">
        <div>
          <p class="eyebrow">Experience base</p>
          <h2>Grounded in business-facing support and implementation work.</h2>
          <p>
            Phillip Carrisalez brings experience translating business needs into practical software and support solutions across customer-facing and operational systems.
          </p>
        </div>
        <div class="pill-list" aria-label="Client and business types supported">
          <span v-for="group in experienceGroups" :key="group">{{ group }}</span>
        </div>
      </section>

      <section id="projects" class="section-shell">
        <p class="eyebrow">Representative work</p>
        <h2>Modernized project story</h2>
        <div class="project-grid">
          <article v-for="project in projectCards" :key="project.title" class="card project-card">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="tags">
              <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
          </article>
        </div>
      </section>

      <section class="section-shell skills-section">
        <div>
          <p class="eyebrow">Tools and skills</p>
          <h2>Current capabilities with a history of getting legacy systems useful again.</h2>
        </div>
        <div class="skill-cloud">
          <span v-for="skill in skills" :key="skill">{{ skill }}</span>
        </div>
      </section>

      <section id="contact" class="section-shell contact-section">
        <div>
          <p class="eyebrow">Contact</p>
          <h2>Need practical technical help?</h2>
          <p>
            Reach out with the system, device, workflow, or business problem you are trying to solve. A short summary is enough to start.
          </p>
        </div>
        <div class="contact-card">
          <a class="contact-line" :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>
          <a class="contact-line" :href="`tel:${phone.replaceAll('-', '')}`">{{ phone }}</a>
          <p class="fine-print">Oak Harbor, Ohio • Serving northwest Ohio and remote support needs where appropriate.</p>
        </div>
      </section>
    </main>
  </div>
</template>
