// get the inputs
const inputs = [].slice.call(document.querySelectorAll('.input-group input'));

// listen for changes
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate(e) {
    var property = `--${this.id}`;
    // remove the last one so we don't pollute the element with inline styles
    document.documentElement.style.removeProperty(property);
    // update the element. Note: We are doing this on <html>, but varaibles can be scoped to ANY element
    document.documentElement.style.setProperty(property, this.value + 'deg');
}