$(document).ready(function() {
	//event.preventDefault();
	$("#get").click(function(){
		var idText = document.getElementById("outputTextId").value;
		document.getElementById("outputTextId").value = "";
		
		//alert(idText);
		$.ajax({
			url: "http://localhost:8080/???/rest/employees/find",
			type: "get",
			data:{
				id: idText 
			},
			success: function(data){
				$(".outputDataText").append("Name:" + data.name + ", role:" + data.role);
			},
			error: function(xhr, ajaxOptions, thrownError){
				alert(xhr.responseText + "\n" + xhr.status + "\n" + thrownError);
			}
		});
		
	});
	$("#post").click(function(){
		var nameText = document.getElementById("inputTextName").value;
		var roleText = document.getElementById("inputTextRole").value;
		document.getElementById("inputTextName").value = "";
		document.getElementById("inputTextRole").value = "";
		document.getElementById("outputP").innerHTML = "Output:";
		//alert(nameText + roleText);
		$.ajax({
			url: "http://localhost:8080/???/rest/employees/insert",
			type: "post",
			data:{
				employeeName: nameText,
				employeeRole: roleText
			},
			success: function(data){
				alert("Data sent successfully (Actual 2.0)!");
			},
			error: function(xhr, ajaxOptions, thrownError){
				alert(xhr.responseText + "\n" + xhr.status + "\n" + thrownError);
			}
		});
	});
});