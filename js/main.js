const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//  select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //  Add Border to current tab
    this.classList.add('tab-border');
    //  Grab Content item from DOM
    // console.log(this.id) - for testing purpose
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem))