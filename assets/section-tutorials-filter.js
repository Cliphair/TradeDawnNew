if (!customElements.get('tutorial-filter')) {
  class TutorialFilter extends HTMLElement {
    constructor() {
      super();
      const mobileFilter = this.querySelector('select[name="tutorial-filters-mobile"]');
      const desktopFilter = this.querySelector('ul[name="tutorial-filters-desktop"]');
      if (desktopFilter) {
        const desktopOptions = desktopFilter.querySelectorAll('li');
        desktopOptions.forEach((option) => {
          option.addEventListener('click', this.desktopOnClick.bind(this));
        })
      }
      mobileFilter.addEventListener('change', this.mobileOnChange.bind(this));
    }

    hideAll() {
      const tutorialSections = document.querySelectorAll(".section-tutorials > div");
      tutorialSections.forEach((section) => {
        section.classList.add('hidden');
        section.classList.remove('visible');
      })
    }

    showSelected(type) {
      const selectedSection = document.querySelectorAll(`.section-tutorials > div[data-type='${type}']`);
      if (selectedSection.length > 0) {
        selectedSection.forEach((section) => {
          section.classList.add('visible');
          section.classList.remove('hidden');
        })
      }
    }

    updateDesktop(type) {
      const listElements = this.querySelectorAll('ul[name="tutorial-filters-desktop"] > li');
      listElements.forEach((element) => {
        element.removeAttribute('selected');
      })

      this.querySelector(`ul[name="tutorial-filters-desktop"] > li[data-value='${type}']`).setAttribute('selected', 'true');
    }

    updateMobile(type) {
      const mobileFilter = this.querySelector(`select`);
      if (mobileFilter) {
        mobileFilter.value = type;
        mobileFilter.querySelector(`option[selected]`).removeAttribute("selected");
        mobileFilter.querySelector(`option[value="${type}"]`).setAttribute("selected", "true");
      }
    }

    desktopOnClick(event) {
      const target = event.target.dataset.value;
      this.hideAll();
      this.showSelected(target);
      this.updateDesktop(target);
      this.updateMobile(target);
    }

    mobileOnChange(event) {
      const target = event.target.value;
      this.hideAll();
      this.showSelected(target);
      this.updateMobile(target);
      this.updateDesktop(target);
    }
  }
  customElements.define('tutorial-filter', TutorialFilter);
}