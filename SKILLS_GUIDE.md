# Skills System Usage Guide

## 📋 Overview

The interactive skills system allows you to display detailed skill information through hover popups. Skills are organized into categories with custom scrollbars when exceeding 6 items per category.

## 🎯 Current Structure

### Categories
- **Development**: Programming languages and web technologies
- **Game & Tools**: Game engines, design tools, and systems
- **Professional**: Soft skills and professional competencies

### Skill Levels
- **Expert**: 90-100% proficiency (5+ years)
- **Advanced**: 75-89% proficiency (3-4 years) 
- **Intermediate**: 50-74% proficiency (1-3 years)
- **Beginner**: 25-49% proficiency (<1 year)

## 🔧 Adding New Skills

### Method 1: HTML Direct Edit

1. Open `index.html`
2. Find the appropriate skill category section
3. Add new skill card:

```html
<div class="skill-card" 
     data-skill="skill-id" 
     data-level="Advanced" 
     data-experience="3+ years" 
     data-projects="Project description">
    <span class="skill-name">Skill Name</span>
    <span class="skill-arrow">></span>
</div>
```

### Method 2: JavaScript API

```javascript
// Add a new skill using the API
skillsPopup.addSkill('.skill-category:first-child', {
    name: 'React',
    level: 'Advanced',
    experience: '3+ years',
    projects: 'Multiple web applications',
    id: 'react'
});
```

### Method 3: Programmatic Bulk Addition

```javascript
const newSkills = [
    {
        name: 'Vue.js',
        level: 'Intermediate', 
        experience: '2+ years',
        projects: 'SPA applications'
    },
    {
        name: 'Docker',
        level: 'Beginner',
        experience: '1+ year', 
        projects: 'Container deployment'
    }
];

newSkills.forEach(skill => {
    skillsPopup.addSkill('.skill-category:nth-child(2)', skill);
});
```

## 📝 Skill Data Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `data-skill` | Unique identifier | `"html-css"` |
| `data-level` | Proficiency level | `"Advanced"` |
| `data-experience` | Years of experience | `"4+ years"` |
| `data-projects` | Project examples | `"15+ projects"` |

## 🎨 Popup Content

The popup automatically generates content based on:

1. **Skill Name**: From `.skill-name` text
2. **Level Badge**: From `data-level` attribute
3. **Experience**: From `data-experience` attribute  
4. **Projects**: From `data-projects` attribute
5. **Details**: Auto-generated from skill name match

## 🔍 Detailed Information System

The system includes predefined detailed descriptions for common skills:

```javascript
const skillDetails = {
    'html/css': 'Responsive design, CSS Grid/Flexbox, SASS/SCSS...',
    'javascript': 'ES6+, DOM manipulation, async/await...',
    'python': 'Django, Flask, data analysis...',
    // ... more skills
};
```

To add custom details for new skills, update the `getSkillDetails()` method in `/src/js/skills-popup.js`.

## 🎯 Best Practices

### Skill Organization
- Keep categories balanced (max 6-8 skills each)
- Use consistent naming conventions
- Order by proficiency/importance

### Data Quality
- Use realistic experience ranges
- Provide specific project examples
- Keep descriptions concise but informative

### Performance
- Avoid too many skills (impacts scrolling)
- Use meaningful IDs for data attributes
- Test popup positioning on mobile

## 🛠️ Customization

### Adding New Categories

1. **HTML Structure**:
```html
<div class="skill-category pixel-box">
    <h3>New Category</h3>
    <div class="skills-list" data-max-visible="6">
        <!-- Skills here -->
    </div>
</div>
```

2. **CSS Styling**: Categories inherit existing styles automatically

3. **JavaScript**: Popups work automatically with proper HTML structure

### Custom Popup Themes

Customize popup appearance in `/src/css/pixel-art.css`:

```css
.skill-popup {
    /* Custom styling */
    background: var(--custom-color);
    border: var(--custom-border);
}
```

## 📱 Mobile Considerations

- Popups auto-adjust position on small screens
- Touch-friendly arrow targets (minimum 44px)
- Responsive text sizes for readability
- Escape key support for accessibility

## 🔄 Removing Skills

```javascript
// Remove by skill selector
skillsPopup.removeSkill('[data-skill="old-skill"]');

// Or remove by element
const skillCard = document.querySelector('[data-skill="outdated"]');
skillsPopup.removeSkill(skillCard);
```

## 🧪 Testing

1. **Hover Functionality**: Test all arrows show popups
2. **Mobile Touch**: Verify touch interactions work
3. **Responsive**: Check popup positioning on different screens
4. **Accessibility**: Test keyboard navigation (ESC key)
5. **Performance**: Ensure smooth animations

## 📊 Example Complete Skill Entry

```html
<div class="skill-card" 
     data-skill="react" 
     data-level="Advanced" 
     data-experience="3+ years" 
     data-projects="E-commerce sites, dashboards, SPAs">
    <span class="skill-name">React</span>
    <span class="skill-arrow">></span>
</div>
```

This will generate a popup showing:
- **React** (title)
- **Advanced** (level badge)
- **Experience: 3+ years**
- **Projects: E-commerce sites, dashboards, SPAs**
- **Details: Component architecture, hooks, state management...** (auto-generated)

---

💡 **Pro Tip**: Always test new skills in both desktop and mobile environments to ensure optimal user experience!