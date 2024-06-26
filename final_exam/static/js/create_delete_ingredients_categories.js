document.addEventListener("DOMContentLoaded", function() {
    function delete_parent(event){
            event.preventDefault();
            event.currentTarget.parentNode.remove();
    }


//    INGREDIENTS
    let container = document.getElementById('ingredient-forms');
    let addButton = container.querySelector('#add-ingredient');

    let delete_buttons = container.querySelectorAll('.remove-ingredient');

    delete_buttons.forEach(function(button) {
        button.addEventListener('click', delete_parent);
    });

    let ingredientCounter = container.children.length - 1;

    addButton.addEventListener('click', function(event) {
        event.preventDefault();

        let ingredientGroup = document.createElement('div');
        ingredientGroup.classList.add('ingredient-group', 'mt-1', 'd-flex', 'gap-3');

        let ingredientInput = document.createElement('input');
        ingredientInput.type = 'text';
        ingredientInput.name = `ingredient-${ingredientCounter}-ingredient`;
        ingredientInput.placeholder = 'Введите ингредиент';
        ingredientInput.required = true;
        ingredientInput.maxLength = 80;

        let amountInput = document.createElement('input');
        amountInput.type = 'text';
        amountInput.name = `ingredient-${ingredientCounter}-amount`;
        amountInput.placeholder = 'Введите количество';
        amountInput.maxLength = 20;

        let removeButton = document.createElement('button');
        removeButton.classList.add('remove-ingredient', 'btn', 'btn-outline-danger');
        removeButton.innerHTML = '<i class="bi bi-x"></i>';
        removeButton.addEventListener('click', delete_parent)

        ingredientGroup.appendChild(ingredientInput);
        ingredientGroup.appendChild(amountInput);
        ingredientGroup.appendChild(removeButton);

        container.appendChild(ingredientGroup);

        ingredientCounter++;
    });

//    CATEGORY
    let category_container = document.getElementById('category-forms');
    let category_button_add = category_container.querySelector('#add-category');

    let category_delete_buttons = category_container.querySelectorAll('.remove-category')
    category_delete_buttons.forEach(function(button) {
        button.addEventListener('click', delete_parent);
    });

    let categoryCounter = category_container.children.length - 1;
    category_button_add.addEventListener('click', function(event) {
        event.preventDefault();

        let categoryGroup = document.createElement('div');
        categoryGroup.classList.add('category-group', 'mt-1', 'd-flex', 'gap-3');

        let categoryInput = document.createElement('input');
        categoryInput.type = 'text';
        categoryInput.name = `category-${categoryCounter}-name`;
        categoryInput.placeholder = 'Введите категорию';
        categoryInput.required = true;
        categoryInput.maxLength = 80;

        let removeButton = document.createElement('button');
        removeButton.classList.add('remove-ingredient', 'btn', 'btn-outline-danger');
        removeButton.innerHTML = '<i class="bi bi-x"></i>';
        removeButton.addEventListener('click', delete_parent)

        categoryGroup.appendChild(categoryInput);
        categoryGroup.appendChild(removeButton);

        category_container.appendChild(categoryGroup);
    });

});