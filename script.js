let container = document.querySelector(".container");
let bullets = document.querySelector(".bullets");

if (!localStorage.getItem("score")) {
    localStorage.setItem("score", 0);
}

// تحويل ملف JSON إلى كائن JavaScript
let questions = [
    {
        "title": "What is Newton's first law of motion?",
        "answer_1": "An object in motion stays in motion unless acted upon by an external force.",
        "answer_2": "For every action, there is an equal and opposite reaction.",
        "answer_3": "The rate of change of momentum is proportional to the applied force.",
        "answer_4": "Force equals mass times acceleration.",
        "right_answer": "An object in motion stays in motion unless acted upon by an external force."
    },
    {
        "title": "What is the unit of electric current?",
        "answer_1": "Volt",
        "answer_2": "Coulomb",
        "answer_3": "Ampere",
        "answer_4": "Ohm",
        "right_answer": "Ampere"
    },
    {
        "title": "What is the formula for calculating kinetic energy?",
        "answer_1": "KE = mv^2",
        "answer_2": "KE = 1/2 mv^2",
        "answer_3": "KE = mgh",
        "answer_4": "KE = mc^2",
        "right_answer": "KE = 1/2 mv^2"
    },
    {
        "title": "Which particle is negatively charged?",
        "answer_1": "Proton",
        "answer_2": "Neutron",
        "answer_3": "Electron",
        "answer_4": "Photon",
        "right_answer": "Electron"
    },
    {
        "title": "What is the acceleration due to gravity on Earth?",
        "answer_1": "9.8 m/s^2",
        "answer_2": "10 m/s^2",
        "answer_3": "8.9 m/s^2",
        "answer_4": "9.2 m/s^2",
        "right_answer": "9.8 m/s^2"
    },
    {
        "title": "What is the unit of force?",
        "answer_1": "Joule",
        "answer_2": "Newton",
        "answer_3": "Pascal",
        "answer_4": "Watt",
        "right_answer": "Newton"
    },
    {
        "title": "What is Ohm's Law?",
        "answer_1": "V = IR",
        "answer_2": "P = IV",
        "answer_3": "F = ma",
        "answer_4": "E = mc^2",
        "right_answer": "V = IR"
    },
    {
        "title": "What is the main element in the sun?",
        "answer_1": "Oxygen",
        "answer_2": "Hydrogen",
        "answer_3": "Carbon",
        "answer_4": "Helium",
        "right_answer": "Hydrogen"
    },
    {
        "title": "Which of the following is a scalar quantity?",
        "answer_1": "Velocity",
        "answer_2": "Force",
        "answer_3": "Acceleration",
        "answer_4": "Temperature",
        "right_answer": "Temperature"
    },
    {
        "title": "What is the organ responsible for pumping blood in the body?",
        "answer_1": "Lung",
        "answer_2": "Liver",
        "answer_3": "Heart",
        "answer_4": "Kidney",
        "right_answer": "Heart"
    },
    {
        "title": "What is the basic unit of a cell?",
        "answer_1": "DNA",
        "answer_2": "Cytoplasm",
        "answer_3": "Tissue",
        "answer_4": "Cell membrane",
        "right_answer": "Cell membrane"
    },
    {
        "title": "Which chemical element is represented by the symbol O?",
        "answer_1": "Oxygen",
        "answer_2": "Hydrogen",
        "answer_3": "Carbon",
        "answer_4": "Nitrogen",
        "right_answer": "Oxygen"
    },
    {
        "title": "Which of these organisms is a plant?",
        "answer_1": "Fish",
        "answer_2": "Giraffe",
        "answer_3": "Tree",
        "answer_4": "Ant",
        "right_answer": "Tree"
    },
    {
        "title": "What is the substance that contains chlorophyll?",
        "answer_1": "DNA",
        "answer_2": "Green pigment",
        "answer_3": "Cytoplasm",
        "answer_4": "Protein",
        "right_answer": "Green pigment"
    },
    {
        "title": "Which of the following organisms is classified as a vertebrate?",
        "answer_1": "Fish",
        "answer_2": "Worm",
        "answer_3": "Mushroom",
        "answer_4": "Bacteria",
        "right_answer": "Fish"
    },
    {
        "title": "What part of the cell controls the entry and exit of substances?",
        "answer_1": "Mitochondria",
        "answer_2": "Cytoplasm",
        "answer_3": "Cell membrane",
        "answer_4": "Nucleus",
        "right_answer": "Cell membrane"
    },
    {
        "title": "What is the largest gland in the human body?",
        "answer_1": "Thyroid gland",
        "answer_2": "Liver",
        "answer_3": "Pituitary gland",
        "answer_4": "Adrenal gland",
        "right_answer": "Liver"
    },
    {
        "title": "What is the function of the lungs in the human body?",
        "answer_1": "Filter blood",
        "answer_2": "Gas exchange",
        "answer_3": "Pump blood",
        "answer_4": "Digest food",
        "right_answer": "Gas exchange"
    },
    {
        "title": "What is the unit used to measure energy?",
        "answer_1": "Volt",
        "answer_2": "Joule",
        "answer_3": "Ampere",
        "answer_4": "Watt",
        "right_answer": "Joule"
    },
    {
        "title": "What is the process by which plants make their own food?",
        "answer_1": "Photosynthesis",
        "answer_2": "Respiration",
        "answer_3": "Digestion",
        "answer_4": "Fermentation",
        "right_answer": "Photosynthesis"
    }
];

function getQuestions() {
    let index = indexIncrement();
    if (index < questions.length) {
        bulletDraw(questions, index);
        addQuestions(questions, index);
    } else {
        container.innerHTML = `Score is ${localStorage.getItem("score")} / ${questions.length}`;
        bullets.remove();
        document.querySelector(".again").style.display = "block";
        document.querySelector("button").remove();
    }
}


getQuestions();

function addQuestions(obj, index) {
    container.innerHTML = 
    `
        <h2>${index + 1}. ${obj[index].title}</h2>
        <div class="rows">
            <div class="row" id="row1" onclick="select(this.id)">${obj[index].answer_1}</div>
            <div class="row" id="row2" onclick="select(this.id)">${obj[index].answer_2}</div>                
            <div class="row" id="row3" onclick="select(this.id)">${obj[index].answer_3}</div>
            <div class="row" id="row4" onclick="select(this.id)">${obj[index].answer_4}</div>
        </div>
    `;


    document.querySelector(".submit").onclick = () => {
        if (localStorage.getItem("select") === obj[index].right_answer) {
            let score = parseInt(localStorage.getItem("score"));
            score++;
            localStorage.setItem("score", score);
        }
        localStorage.setItem("select", ""); 
        getQuestions(); 
    };
}

function select(id) {
    let row = document.getElementById(`${id}`);
    let rows = document.querySelectorAll(".row");
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].classList.contains("selected")) {
            rows[i].classList.remove("selected");
        }
    }
    row.classList.add("selected");
    localStorage.setItem("select", row.innerHTML);
}

function indexIncrement() {
    let count = localStorage.getItem("count") ? parseInt(localStorage.getItem("count")) : 0;
    localStorage.setItem("count", count + 1);  
    return count;  
}

function bulletDraw(obj, num) {
    bullets.innerHTML = ""; 
    for (let i = 0; i < obj.length; i++) {
        let span = document.createElement("span");
        bullets.appendChild(span);
    }
    if (num < bullets.children.length) {
        for (let i = 0; i <= num; i++) {
            bullets.children[i].classList.add("on"); 
        }
    }
    document.querySelector(".qcount span").innerHTML = obj.length;
}

document.querySelector(".again").onclick = () => {
    location.reload();
    localStorage.setItem("count", 0);
}

window.onunload = () => {
    localStorage.clear();
}
