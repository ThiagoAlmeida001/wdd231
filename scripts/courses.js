const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces the relations between the computer electronic components...',
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to making open standards...',
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 3,
        certificate: 'Web and Computer Programming',
        description: 'Students become sophisticated with functions by writing programs that use parameters...',
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 3,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces the concepts of object-oriented programming...',
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Web Frontend Development I',
        credits: 3,
        certificate: 'Web and Computer Programming',
        description: 'This course focuses on development of standard-compliant web pages...',
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Web Frontend Development II',
        credits: 3,
        certificate: 'Web and Computer Programming',
        description: 'This course focuses on user experience, accessibility, and optimization...',
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
        container.appendChild(courseCard);
    });

    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('total-credits').textContent = totalCredits;
}

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
