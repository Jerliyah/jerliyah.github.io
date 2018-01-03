let question_sets = object_to_array( document.querySelectorAll("div.question-set") );


let options =  document.querySelectorAll("p") ;

options.forEach( (option) => {
    option.addEventListener('click', () => {
        there_can_be_only_one_selected(option)
    })
})


let button = document.getElementsByTagName("button")[0];

button.addEventListener('click', () => { form_submission() })

function form_submission() {

    let submission_message = "The form has been submitted. Let's see your results: \n\n";

    for(let counter=0; counter < question_sets.length; counter++) {
        let question_set = question_sets[counter];
        
        let selected_option = find_selected_option(question_set.querySelector("div.options-ctn"));

        submission_message += `${counter+1}. ${get_messages(counter, selected_option)} \n`;
    }
       
    alert(submission_message);
    clear_selections();
    
}






// Helper Functions
function clear_selections() {
    options.forEach( (option) => { option.classList = "" } )
}


function find_selected_option(parent) {

    for(let counter=0; counter < parent.children.length; counter++) {

        child = parent.children[counter];

        if( has_selected_class(child) ) {
            selected_option = parseInt( child.innerText );
            return selected_option
        }
    }

    // When no selections were made for this set
    return 0    
}


function get_siblings(element) {
    let allChildren = element.parentElement.children; // Returns NodeList

    allChildrenList = object_to_array(allChildren);

    // Remove the given element from the children list so that we are left with just the siblings
    let elementIndex = allChildrenList.indexOf(element);
    let siblings = allChildrenList.filter( (child) => { return child != element });

    return siblings;
}


function has_selected_class(element) {
    if ( element.classList.contains('selected') ) {
        return element
    }
}


function get_messages(questionNumber, selectedNumber) {
    switch(questionNumber) {

        case 0: 
            switch(selectedNumber) {
                case 1: return "Meh, such a sphere"
                case 2: return "Ah, you're definetely a cylinder"
                case 3: return "Hmm, perhaps you're a pyramid"
                case 4: return "Pretty cubic, perhaps of a rectangular prism though"
                case 5: "Mathmatical! Cubic all the way!"

                default: return "I guess you don't know how cubic you are"
            }
        break;

        case 1:
            switch(selectedNumber) { 
                case 1: return "Aw, no love for the universe :("
                case 2: return "Oh come on, the universe has some pretty interesting stuff"
                case 3: return "Neutral, that's fair"
                case 4: return "More good than bad, that's a nice way to view it"
                case 5: return "You love the universe! Someone is having a great day"

                default: return "Connect with the universe and try again. I recommend by watching Steven Universe :D "
            }
        break;
        
        case 2:
            switch(selectedNumber) { 
                case 1: return "Why you gotta hate on stalactites?"
                case 2: return "They can be dangerous if they fall so I can understand"
                case 3: return "They just exist like everything else, fair point"
                case 4: return "They can look pretty cool"
                case 5: return "Wow, what makes you love stalactites?"

                default: return "Check out some pictures of them, they can be kewl but also scary"
            }
        break;

        case 3:
            switch(selectedNumber) { 
                case 1: return "Noodle? Hmm, I like noodles"
                case 2: return "Burpleberry, sounds like a color and a food *^^*"
                case 3: return "Meh, you get gray"
                case 4: return "A, as in alphabet and apple-green. Good choice"
                case 5: return `Cookie Cat! He's a pet for your tummy!
                Cookie Cat! He's super duper yummy!
                Cookie Cat! He left his family behind!
                Cookie Caaaaat! `

                default: return "For this, I would recommend B(ee). As in the letter B, and bee which refers to the animal and could be considered a color pattern. Haha, smart right?"
            }
        break;

        case 4:
        switch(selectedNumber) { 
            case 1: return "No seafood for you"
            case 2: return "He needs some MILK"
            case 3: return "Shrimp for you, shrimp for me, we're all at the shrimp party"
            case 4: return "Let's get EXTRA shrimpy!"
            case 5: return "SSSSSHHHHHRRRRIIIIIMMMMMMMPPPPP"

            default: return
        }
        break;
    }
}


function object_to_array(object) {
    array = [];
    
    for(let i=0; i < object.length; i++) {
        array.push(object[i]);
    }

    return array;
}


function there_can_be_only_one_selected(element) {
    let siblings = get_siblings(element);
    
    siblings.forEach( (sibling) => {
        if ( sibling.classList.contains('selected') ) {
            sibling.classList.remove('selected');
        }
    });

    element.classList.add('selected');

}
