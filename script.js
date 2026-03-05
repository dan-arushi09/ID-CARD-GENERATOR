// asdfghjkl
//!
//.
///
//@
//*
//+
//-



function toTitleCase(text) {
    return text.toLowerCase().split(" ").map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");
}

function generateID() {

    const errorDiv = document.getElementById("errorMsg");
    errorDiv.innerText = "";

    //* Get all fields
    const fields = [
        {id: "college", name: "College Name"},
        {id: "name", name: "Name"},
        {id: "course", name: "Course"},
        {id: "branch", name: "Branch"},
        {id: "enrollment", name: "Enrollment No."},
        {id: "batch", name: "Batch"},
        {id: "mobile", name: "Mobile No."},
        {id: "bloodGroup", name: "Blood Group"},
        {id: "photo", name: "Photo"}
    ];

    //- removing these
    // for (let id of ids) {
    //     const el = document.getElementById(id);
    //     if (!el.value.trim()) {
    //         errorDiv.innerText = "Please fill " + el.placeholder;
    //         el.focus();
    //        return;
    //     }
    // }

    //- adding these
    //* Validate each field
    for (let field of fields) {
        const element = document.getElementById(field.id);
        if (!element.value && field.id !== "photo") {
            errorDiv.innerText = `Please fill ${field.name}`;
            element.focus();
            return;
        }
        if (field.id === "photo" && !element.files[0]) {
            errorDiv.innerText = `Please upload ${field.name} first.`;
            element.focus();
            return;
        }
    }

    const college = document.getElementById("college").value.trim().toUpperCase();
    const name = document.getElementById("name").value.trim().toUpperCase();
    const course = toTitleCase(document.getElementById("course").value.trim());
    const branch = document.getElementById("branch").value.trim().toUpperCase();
    const enrollment = document.getElementById("enrollment").value.trim().toUpperCase();
    const batch = document.getElementById("batch").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const bloodGroup = document.getElementById("bloodGroup").value.trim().toUpperCase();
    const cardNo = document.getElementById("cardNo").value.trim();
    const photoInput = document.getElementById("photo");

    const reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById("generatedID").innerHTML = `
            <div class="generated-card">
                <div class="generated-header">${college}</div>
                <div class="header-line"></div>

                <div class="generated-body">
                    <div class="left-section"></div>

                        <div class="right-section">
                            <div class="identity-title">IDENTITY CARD</div>
                            
                            <p>Name: ${name}</p>
                            <p>Course: ${course}</p>
                            <p>Branch: ${branch}</p>
                            <p>Enrollment No.: ${enrollment}</p>
                            <p>Batch: ${batch}</p>
                            <p>Mobile: ${mobile}</p>
                            <p>Blood Group: ${bloodGroup}</p>
                        </div>
                </div>

                <div class="generated-footer">
                    <div class="card-number">
                        Card No: ${cardNo ? cardNo : '<div class="blank-line"></div>'}
                    </div>
                    <div class="director">Director</div>

                </div>
            </div>
        `;
        
        const leftSection = document.querySelector(".left-section");
        leftSection.style.backgroundImage = `url(${e.target.result})`;
        leftSection.style.backgroundSize = "cover";
        leftSection.style.backgroundPosition = "center";

        reader.readAsDataURL(photoInput.files[0]);

        //- Show the download button only after generating card
        const downloadBtn = document.getElementById("downloadBtn");
        if(downloadBtn){
            downloadBtn.style.display = "block";
        }
    };
    reader.readAsDataURL(photoInput.files[0]);
}

//- download button funtioning
function downloadID() {
    const card = document.querySelector(".generated-card");
    if (!card) {
        alert("Please generate ID first");
        return;
    }

    html2canvas(card, { scale: 3 }).then(canvas => {
        const link = document.createElement("a");
        const name = document.getElementById("name").value.trim();
        link.download = name.replace(/\s+/g, '_') + ".jpeg";
        link.href = canvas.toDataURL("image/jpeg", 1.0);
        link.click();
    });
}