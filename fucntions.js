let total_free =0;
deves.map((data , index) => {

    console.log(`
    
    student Name            :${data.name}
    student Role            :${data.roll}
    student Age             :${data.age}
    student Class           :${data.class_name}
    student Gender          :${data.gender}
    student Location        :${data.location}
    student fees            :${data.admition_free}
    ==================================================
   
    `);

    total_free +=index.admition_free;


    // Find All Female Students


    let totalfemale =0;

    if (data.gender == 'Female'){
        console.log(`
        

    student Name            :${data.name}
    student Role            :${data.roll}
    student Age             :${data.age}
    student Class           :${data.class_name}
    student Gender          :${data.gender}
    student Location        :${data.location}
    student fees            :${data.admition_free}
    ===============================================
           
        `);
        
     }
     console.log(`
     
     totale female student =${index}
     `);



//    Find class wise student result

if (data.class_name == 'five'){
    console.log(`

student Name            :${data.name}
student Role            :${data.roll}
student Age             :${data.age}
student Class           :${data.class_name}
student Gender          :${data.gender}
student Location        :${data.location}
student fees            :${data.admition_free}
============================================
    
    
    `);
 
 }



//  Location wise student result

if (data.location == 'Manikgonj'){
    console.log(`

student Name            :${data.name}
student Role            :${data.roll}
student Age             :${data.age}
student Class           :${data.class_name}
student Gender          :${data.gender}
student Location        :${data.location}
student fees            :${data.admition_free}
    ================================================
    
    `);
 
 }




//  find student between 10 - 25 age

if (data.age >= 10 &&  data.age <=25){
    console.log(`

student Name            :${data.name}
student Role            :${data.roll}
student Age             :${data.age}
student Class           :${data.class_name}
student Gender          :${data.gender}
student Location        :${data.location}
student fees            :${data.admition_free}
======================================
    
    
    `);
 
 }


});