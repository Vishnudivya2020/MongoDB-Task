
//Find all the topics and tasks which are thought in the month of october.

db .Topics.find({"tasks.date":{$regex:'2020-10'}},{topic:1,'tasks.task':1,_id:0,'tasks.date':1});

//2)Find all the company drives which appered between 15-oct-2020 and 31-oct-2020.

db.company_drives.find({drive_date:{$gte:'2020-10-15',$lte:'2020-10-31'}});

//3)find all the company drives and students who are appeared for the placement.

db.company_drives.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "drive_Id",
            foreignField: "drive_Id",
            as: "newcollection"
        }
    },
    {
      $project: {
          _id: 0,
          company_name: 1,
          drive_date: 1,
          location: 1,
        newcollection: {
              name: 1,
              Rollnumber :1,
              email:1
          }
      }
  }
]);

//4)Find the number of problems solved by the user in codekata.

   db.Codekata.find({},{name:1,_id:0,'codekata.solvedpro':1});

   
//5)Find all the mentors with who has the mentee's count more than 15,
   db.Mentor.find({mentee_count:{$gte:15}});
   
//6)Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.Tasks.find({date:{$gte:'2020-10-15',$lte:'2020-10-31'}},{_id:0,id:1,topic_id:1,name:1,status:1,submitted:1});
