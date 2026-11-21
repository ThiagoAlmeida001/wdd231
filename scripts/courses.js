const courseDetails = document.querySelector('#course-details');


const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces the relations between the computer electronic components...',
        technology: ['Python'],
        ompleted: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to making open standards...',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 3,
        certificate: 'Web and Computer Programming',
        description: 'Students become sophisticated with functions by writing programs that use parameters...',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 3,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces the concepts of object-oriented programming...',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Web Frontend Development I',
        credits: 3,
        certificate: 'Web and Computer Programming',
        description: 'This course focuses on development of standard-compliant web pages...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Web Frontend Development II',
        credits: 3,
        certificate: 'Web and Computer Programming',
        description: 'This course focuses on user experience, accessibility, and optimization...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

function displayCourses(filteredCourses) {
    const container = document.querySelector('.courses-container');
    container.innerHTML = '';

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        
        if (course.completed) {
            courseCard.classList.add('completed');
        }

        courseCard.innerHTML = `<h3>${course.subject} ${course.number}</h3>`;
        
        // 2. El evento click DEBE ir aquí adentro, donde existen 'courseCard' y 'course'
        courseCard.addEventListener('click', () => {
            displayCourseDetails(course);
        });

        container.appendChild(courseCard);
    });

    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('total-credits').textContent = totalCredits;
}

function displayCourseDetails(course) {
    courseDetails.innerHTML = `
    <button id="closeModal" aria-label="Close">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;
    courseDetails.showModal();
    
    courseDetails.querySelector('#closeModal').addEventListener('click', () => {
        courseDetails.close();
    });
}

// Close the modal when the user clicks outside of it (on the backdrop)
courseDetails.addEventListener('click', (event) => {
  if (event.target === courseDetails) {
    courseDetails.close();
  }
});

document.getElementById('all-courses').addEventListener('click', () => displayCourses(courses));

document.getElementById('wdd-courses').addEventListener('click', () => {
    const wdd = courses.filter(course => course.subject === 'WDD');
    displayCourses(wdd);
});

document.getElementById('cse-courses').addEventListener('click', () => {
    const cse = courses.filter(course => course.subject === 'CSE');
    displayCourses(cse);
});

document.addEventListener('DOMContentLoaded', () => {
    displayCourses(courses);
});