var thisComment = [
{"name": "fumer555","date": "14 Jan, 2020", "body": "Hello World! 1"},
{"name": "fumer555","date": "14 Jan, 2020", "body": "Hello World! 2"},
{"name": "fumer555","date": "14 Jan, 2020", "body": "Hello World! 3"},
{"name": "fumer555","date": "14 Jan, 2020", "body": "Hello World! 4"},
];

for(var i=0;i<thisComment.length;i++){
	var html = "<div class='commentBox'><div class='leftPanelImg'><img src='images/profile.png'></div><div class='rightPanel'><span>"+thisComment[i].name+"</span><div class='date'>"+thisComment[i].date+"</div><p>"thisComment[i].body"</p></div><div class='clear'></div></div>"
	$('#container').append(html)
}