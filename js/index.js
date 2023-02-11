var siteName=document.getElementById("siteName");
var SiteURL=document.getElementById("SiteURL");
var bookBox=document.getElementById("bookBox");

(function(){
    var demo1=document.getElementById("demo1");
    var demo2=document.getElementById("demo2");
    var demo3=document.getElementById("demo3");
    demo1.innerHTML="Bookmarker";
    demo2.innerHTML="Bookmark your favorite sites";
    demo3.innerHTML="© 2019 Bookmarker Inc.";
})();

var bookmarkArray;
(function(){
    if(localStorage.getItem("data")==null)
    bookmarkArray=[];
    else
    bookmarkArray=JSON.parse(localStorage.getItem("data"));
    display(bookmarkArray);
})();

function addBookmark(){
    if(regexName()==true && regexURL()==true){
        var bookmark={
            name: siteName.value,
            url: SiteURL.value,
        }
        bookmarkArray.push(bookmark);
        localStorage.setItem("data",JSON.stringify(bookmarkArray));
        display(bookmarkArray);
        clearForm();
    }
};

function display(arr){
    var box="";
    for(var i=0 ;i<bookmarkArray.length ;i++){
        box+=
        `<div class="box p-3 mx-3 mb-3">
            <table class="table w-75">
                <tbody>
                    <tr>
                        <td class="td-text fs-5 fw-semibold">${bookmarkArray[i].name}</td>
                        <td>
                            <a href="${bookmarkArray[i].url}" class="btn text-white" target="_blank">visit</a>
                            <button onclick="deleteBookmark(${i})" class="btn btn-delete text-white">delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>`;
    }
    bookBox.innerHTML=box;
}

function clearForm(){
    siteName.value= "";
    SiteURL.value= "";
}

function deleteBookmark(index){
    bookmarkArray.splice(index,1);
    localStorage.setItem("data",JSON.stringify(bookmarkArray));
    display(bookmarkArray);
}

function regexName(){
    var regex=/^[A-Z][a-z0-9]{2,}$/;
    if(regex.test(siteName.value)==true){
        return true;
    }
    else{
        alert("invalid site Name");
    }
}

function regexURL(){
    var regex=/^(https:\/\/)(www.)?[a-z0-9]{3,}\.com\/?$/;
    if(regex.test(SiteURL.value)==true){
        return true;
    }
    else{
        alert("invalid site URL");
    }
}

