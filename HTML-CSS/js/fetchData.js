async function loadJSON() {
    try {
        const response = await fetch('/data/content.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching JSON:', error);
        return null;
    }
}

async function updateHTML() {
    const data = await loadJSON();
    if (data) {
        
        const feedback1 = data.feedback['1'];
        const feedback2 = data.feedback['2'];
        const feedback3 = data.feedback['3'];
        const category1 = data.categories['1'];
        const category2 = data.categories['2'];
        const category3 = data.categories['3'];
        const category4 = data.categories['4'];

        document.getElementById('feedback1').innerHTML = feedback1;
        document.getElementById('feedback2').innerHTML = feedback2;
        document.getElementById('feedback3').innerHTML = feedback3;
        document.getElementById('category1').innerHTML = category1;
        document.getElementById('category2').innerHTML = category2;
        document.getElementById('category3').innerHTML = category3;
        document.getElementById('category4').innerHTML = category4;
    }
}


updateHTML();