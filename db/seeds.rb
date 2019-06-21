# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Category.destroy_all
TaskerCat.destroy_all
Task.destroy_all


User.create(first_name:"Demo", last_name:"User", email:"demouser@gmail.com", zipcode:11004, password:"demosuser", tasker: false);
User.create(first_name:"Ma", last_name:"Th", email:"math@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Man", last_name:"Tho", email:"mantho@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Manj", last_name:"Thom", email:"manjthom@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Manju", last_name:"Thomas", email:"manjuthomas@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Su", last_name:"Pu", email:"supa@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Sus", last_name:"Pun", email:"suspun@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Susa", last_name:"Punn", email:"susapunn@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Susy", last_name:"Punnoose", email:"susypunnoose@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Ro", last_name:"Tho", email:"rotho@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Roh", last_name:"Thom", email:"rohthom@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Roha", last_name:"Thoma", email:"rohathoma@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Rohan", last_name:"Thomas", email:"rohanthomas@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Ne", last_name:"Th", email:"neth@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Neh", last_name:"Tho", email:"nehtho@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Neha", last_name:"Thomas", email:"nehathomas@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Ra", last_name:"Th", email:"rath.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Ran", last_name:"Tho", email:"rantho@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Ranj", last_name:"Thom", email:"ranjthom@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Ranji", last_name:"Thoma", email:"ranjithoma@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Ranjit", last_name:"Thomas", email:"ranjithomas@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Su", last_name:"Th", email:"suth@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Sus", last_name:"Tho", email:"sustho@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Susy", last_name:"Thomas", email:"susythomas@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Sw", last_name:"Th", email:"swth@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Swa", last_name:"Tho", email:"swatho@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Swat", last_name:"Thom", email:"swathom@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Swati", last_name:"Thomas", email:"swatithomas@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Mo", last_name:"Ma", email:"moma@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Mor", last_name:"Mar", email:"mormar@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Mork", last_name:"Maryland", email:"morkmaryland@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Mo", last_name:"Ka", email:"moka@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Mol", last_name:"Kal", email:"molkal@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Moll", last_name:"Kali", email:"mollkali@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Molly", last_name:"Kalikadan", email:"mollykalikadan@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Pr", last_name:"Ja", email:"prja@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Pra", last_name:"Jac", email:"prajac@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Pras", last_name:"Jaco", email:"prasjaco@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Prasa", last_name:"Jacob", email:"prasajacob@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Prasad", last_name:"Jacobs", email:"prasadjacobs@gmail.com", zipcode:11004, password:"demosuser", tasker: true);
User.create(first_name:"Venna", last_name:"Jacob", email:"vennajacob@gmail.com", zipcode:11004, password:"demosuser", tasker: true);

Category.create(title:"Moving");
Category.create(title:"Furniture Assembly");
Category.create(title:"Mounting");
Category.create(title:"Home Improvement");
Category.create(title:"Cleaning");
Category.create(title:"Handyman");
Category.create(title:"Heavy Lifting");
Category.create(title:"Delivery");
Category.create(title:"Yard Work");
Category.create(title:"Personal Assistant");
Category.create(title:"Packing and Unpacking");
Category.create(title:"Painting");
Category.create(title:"Plumbing");
Category.create(title:"Electrical Work");
Category.create(title:"Deep Clean");
Category.create(title:"Organization");
Category.create(title:"Event Staffing");
Category.create(title:"Run Errands");
Category.create(title:"Carpentry");

TaskerCat.create(category_id: 1, user_id: 2, hourly_rate: 47, skills_description: "I can definitely help you with packing and unpacking items. Light moving only. No heavy furniture. My rate is for property only. Passengers are $10 extra per person. My car is small so please confirm if I can take all items and/or passengers.")
TaskerCat.create(category_id: 1, user_id: 3, hourly_rate: 55, skills_description: "Living in New York it seems like we are always on the move or moving allow me to take some of that stress off of your your hands.")
TaskerCat.create(category_id: 2, user_id: 4, hourly_rate: 50, skills_description: "Skilled in assembling all kinds of furniture (IKEA, WayFair, Brimnes, etc.) 1-3floor Walk-ups $50 flat rate and $20 for each additional floor(s). Extremely professional, hard working, fast and efficient.")
TaskerCat.create(category_id: 2, user_id: 5, hourly_rate: 45, skills_description: "I've worked with fairway, IKEA etc on a daily basis for over 2 years with great reviews. I've always love putting furnitures together since childhood. It's always something new and I have great pleasure in taking on new exciting projects.")
TaskerCat.create(category_id: 3, user_id: 6, hourly_rate: 30, skills_description: "Drywall or concrete. Stud or no stud, I can mount it. TVs, shelves, curtains, artwork, anything you want. Have all the tools, drill, stud finder, ratchet, and a 6ft ladder. Quick, level and clean install only. No extra charge for hardware used!")
TaskerCat.create(category_id: 3, user_id: 7, hourly_rate: 35, skills_description: "I have all the tools and experience necessary to complete your task. My only limits are plumbing and electrical. I don't install walls nor wallpapers. I also don't hide wiring through (or inside) walls. I don't have a ladder.")
TaskerCat.create(category_id: 4, user_id: 8, hourly_rate: 60, skills_description: "I'm very handy and I have many years of professional experience working in the home doing minor and major repairs extending from demolition to fixing a hole in the ceiling.")
TaskerCat.create(category_id: 4, user_id: 9, hourly_rate: 65, skills_description: "I am a very focused individual who aims for customer satisfaction, speed and safety. 9 years in the field with 5 star reviews to back up my statement. Experienced in spackling and repaiing light damage done to walls. Note: I am NOT AN ELECTRICIAN.")
TaskerCat.create(category_id: 5, user_id: 10, hourly_rate: 25, skills_description: "When I clean a home I leave a fresh smell behind. Marking sure I scrub and dust hard to reach places. I have been cleaning since I was young, so I can't stand to leave a home dirty. Hire me and you will not be disappointed.")
TaskerCat.create(category_id: 5, user_id: 11, hourly_rate: 28, skills_description: "I`m a very experienced house maid that has completed a lot of cleaning jobs in my career. I will clean your apartment or business with the techniques and standards I have developed over the years to make it nice and shiny.")
TaskerCat.create(category_id: 6, user_id: 12, hourly_rate: 50, skills_description: "10 years experience as a Carpenter and assembler. A multitasker for getting the job completed. Two hours minimum per appointment.")
TaskerCat.create(category_id: 6, user_id: 13, hourly_rate: 55, skills_description: "Once I fix it you won't need another repair ever again I can fix anything that's broken and giving you a hard time like squeaks an leaks....")
TaskerCat.create(category_id: 7, user_id: 14, hourly_rate: 40, skills_description: "I have been an experience mover  for the past six years without any complaints tolls are not included in this rate")
TaskerCat.create(category_id: 7, user_id: 15, hourly_rate: 45, skills_description: "Sometimes furniture is just too heavy or big. I have techniques and tools to lift/move whatever item you have. I work safely and am a problem solvers. Please Note: If this involves transportation then there may be vehicle expense + driving time added")
TaskerCat.create(category_id: 8, user_id: 16, hourly_rate: 25, skills_description: "I know the city and the 5 boroughs very well and I am quick to deliver. I do not have a van or car.")
TaskerCat.create(category_id: 8, user_id: 17, hourly_rate: 30, skills_description: "I have many happy clients. References available upon request.  Your precious cargo is my first priority. Become one of my many happy clients today!")
TaskerCat.create(category_id: 9, user_id: 18, hourly_rate: 60, skills_description: "I have several years of experience in yard work. From Raking leaves to mowing lawns...I come to get the Job done..")
TaskerCat.create(category_id: 9, user_id: 19, hourly_rate: 65, skills_description: "Removal of Debris ONLY. I have been an experience mover  for the past six years without any complaints. Dump fee and tolls are not included in this rate.")
TaskerCat.create(category_id: 10, user_id: 20, hourly_rate: 50, skills_description: "I'm a wonderful personal assistant! I can make calls, go on errands, file documents, schedule appointments, and more. I'm very handy to have around.")
TaskerCat.create(category_id: 10, user_id: 21, hourly_rate: 45, skills_description: "I always been a peoples pleaser, and would be a great personal assistant. What ever you need assistance with like filing, shopping, house sitting etc. I would help assist you with your daily task.")
TaskerCat.create(category_id: 11, user_id: 22, hourly_rate: 60, skills_description: "I'm very organized and I know how to pack items in a way that will make space for more items!")
TaskerCat.create(category_id: 11, user_id: 23, hourly_rate: 65, skills_description: "I am a very focused individual who aims for customer satisfaction, speed and safety. 9 years in the field with 5 star reviews to back up my statement. I do not carry boxes or packing items.")
TaskerCat.create(category_id: 12, user_id: 24, hourly_rate: 60, skills_description: "very good PAINTER! but I don't have a ladder!,I am NOT a PLASTER man,I may spakle some small holes. Note : I will provide all the supplies except the paint and ladder !!! One hour minimum.")
TaskerCat.create(category_id: 12, user_id: 25, hourly_rate: 55, skills_description: "Painted indoor and outdoor. Own the supplies that are needed (brushes and rollers), as well as a 4ft and a 6ft ladders.")
TaskerCat.create(category_id: 13, user_id: 26, hourly_rate: 70, skills_description: "I've been a plumber for six years. I take great pride in my work with great hopes of working with my clients again. My main gain is to satisfy. I have the tools and skills necessary to complete any job at hand.")
TaskerCat.create(category_id: 13, user_id: 27, hourly_rate: 75, skills_description: "Very proficient and enjoy plumbing installation the most. 10 years experience. Two hours minimum per appointment.")
TaskerCat.create(category_id: 14, user_id: 28, hourly_rate: 80, skills_description: "10 years experience. Very proficient from lighting, running camera lines, appliance installation, etc. Two hour minimum.")
TaskerCat.create(category_id: 14, user_id: 29, hourly_rate: 85, skills_description: "I can replace existing chandeliers, light fixtures etc, ceiling fans,outlets, dimmers, regular, 3 way switches & breakers.I AM electrician certified & I have my own tools 🛠 .I DON'T have a LADDER. I Don't isntall thermostat, washers & heaters.")
TaskerCat.create(category_id: 15, user_id: 30, hourly_rate: 30, skills_description: "I have great skills when it comes to deep cleaning. I’ll do what ever it takes to get the task done. 2 hour minimum")
TaskerCat.create(category_id: 15, user_id: 31, hourly_rate: 35, skills_description: "I am a housekeeper with 10 years of experience I been working for apps as TAKL, JOP, Handy.")
TaskerCat.create(category_id: 16, user_id: 32, hourly_rate: 40, skills_description: "Room, kitchen cabinet, closets, office basement, garage or any room in your home. Expect professional service")
TaskerCat.create(category_id: 16, user_id: 33, hourly_rate: 35, skills_description: "I'm very organized and tidy! I can file documents and fix up shelves. I can also organize your closet and your office. This is my second-most popular task!")
TaskerCat.create(category_id: 17, user_id: 34, hourly_rate: 50, skills_description: "I can organize your event with the greatest of ease!")
TaskerCat.create(category_id: 17, user_id: 35, hourly_rate: 55, skills_description: "Provides servers, bartenders, general party help, and cleanup personal")
TaskerCat.create(category_id: 18, user_id: 36, hourly_rate: 25, skills_description: "2.0 hour minimum. I will run your errands and help with your day to day activities. I will get your task done in a timely manner.")
TaskerCat.create(category_id: 18, user_id: 37, hourly_rate: 30, skills_description: "I'm very helpful! I can pick up and drop off whatever you need. I've done this for many years for my church and my family. I can also ship packages. I can go where you want me to go.")
TaskerCat.create(category_id: 19, user_id: 38, hourly_rate: 70, skills_description: "10 years experience as a Carpenter who has skill sets for standard assembly to custom design carpenty. Three hours minimum per appointment.")
TaskerCat.create(category_id: 19, user_id: 39, hourly_rate: 75, skills_description: "I have over 10 yrs experience in the carpentry and construction field. My experience ranges from flooring to dry wall and most things in between. I guarantee satisfaction")


Task.create(category_id: 2, date: "2019-06-20", detail: "Put together some Ikea furniture", end_address: "", size: "Small - Est. 1 hr", start_address: "22 West 38th Street, New York, NY", status: "booked", tasker_id: 4, time: "2000-01-01T08:00:00.000Z", user_id: 1)
Task.create(category_id: 2, date: "2019-06-28", detail: "Assemble Wayfair furniture", end_address: "", size: "Small - Est. 1 hr", start_address: "22 West 38th Street, New York, NY", status: "booked", tasker_id: 5, time: "2000-01-01T08:00:00.000Z", user_id: 1)