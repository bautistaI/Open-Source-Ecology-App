$(function(){
	
		$('#projects').html(''); //empties previous data from the #projects section

		$(projects).each(function(){ //refers to the variable projects and loops 
			
			$('#projects').append("<li><a data-id=' " + this._id + " ' href='#demo'>" + this.name + "</a></li>");
			
		});
		
		
		
		$('#projects a').live('click', function(){ // see jquery documentation for the use of 
			
		$('#projects').listview('refresh'); //requiered to refresh the contents inside the ul with data-role listview
		
			var selectedID = $(this).data('id'); //variable holding the value for the data value !!!!IMPORTANT!!!!! ID MUST BE ALWAYS LOWER CASE
			$(projects).each(function(){ //each is a cleaner way to loop through the array
				if(this._id == selectedID){ 
					
					//WE have a match
					$("#demo h1").html(this.name); //change the h1 of the link clicked to the specific h1 for that id
					$("#demoCont").html(this.content);
					
				}
			});
		
			
		});
		
});

var projects = [
						{
							name : "Aluminum Extractor from Clay",
							_id: 1000,
							content: "This is the content for the ALUMINUM EXTRACTOR FROM CLAY PROJECT - this content is being created dynamically by Javascript Cool!",
						},
						{
							name : "Bakery Oven",
							_id: 1001,
							content: "This is the content for the BAKERY OVEN PROJECT  - this content is being created dynamically Cool!",
						},
						{
							name : "Baler",
							_id : 1002,
							content: "This is the content for the BALER PROJECT - this content is being created dynamically Cool!",
						},
						{
							name : "Bioplastic Extruder",
							_id : 1003,
							content: "This is the content for the BIOPLASTIC EXTRUDER PROJECT - this content is being created dynamically Cool!",
						},
						{
							name : "Bulldozer",
							_id : 1004,
							content: "This is the content for the BULLDOZER PROJECT - this content is being created dynamically Cool!",
						},
						{
							name : "CEB Press",
							_id : 1005,
							content: "This is the content for the CEB PRESS PROJECT - this content is being created dynamically Cool!",
						},
						{
							name : "Cement Mixer",
							_id : 1006,
							content: "This is the content for the CEMENT MIXER PROJECT - this content is being created dynamically Cool!",
						},
						{
							name : "Chipper/Hammermill",
							_id : 1007,
							content: "This is the content for the CHIPPER/HAMMERMILL PROJECT - this content is being created dynamically Cool!",
						},
						{
							name : "CNC Circuit Mill",
							_id : 1008,
							content: "This is the content for the CNC CIRCUIT MILL PROJECT - this content is being created dynamically Cool!",
						},
						{
							name : "CNC Precision Multimachine",
							_id : 1009,
							content: "This is the content for the CNC PRECISION MULTIMACHINE PROJECT - this content is being created dynamically Cool!",
						},
						{
							name : "CNC Torch/Router Table",
							_id : 1010,
							content: "This is the content for the CNC TORCH/ROUTER TABLE PROJECT - this content is being created dynamically Cool!",
						},
						{
							name : "Dairy Milker",
							_id : 1011,
							content: "This is the content for the DAIRY MILKER PROJECT  - this content is being created dynamically Cool!",
						},
						{
							name : "Dimensional Sawmill",
							_id : 1012,
							content: "This is the content for the DIMENSIONAL SAWMILL PROJECT - this content is being created dynamically Cool!",
						},
						{
							name : "Electric Motor/Generator",
							_id : 1013,
							content: "This is the content for the ELECTRIC MOTOR/GENERATOR PROJECT - this content is being created dynamically Cool!",
						},
						{
							name : "Gasifier Burner",
							_id : 1014,
							content: "This is the content for the GASIFIER BURNER PROJECT - this content is being created dynamically Cool!",
						},
						{
							name : "Hay Cutter",
							_id : 1015,
							content: "This is the content for the HAY CUTTER PROJECT - this content is being created dynamically Cool!",
						},
						{
							name : "Hay Rake",
							_id : 1016,
							content: "This is the content for the HAY RAKE PROJECT - this content is being created dynamically Cool!",
						}
										
			];
