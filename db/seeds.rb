# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(first_name:"Demo", last_name:"User", email:"demouser@gmail.com", zipcode:11004, password:"demosuser", tasker: false);
Category.create(title:"Moving");
Category.create(title:"Furniture Assembly");
Category.create(title:"Mounting");
Category.create(title:"Home Improvement");
Category.create(title:"Cleaning");
Category.create(title:"General Handyman");
Category.create(title:"Heavy Lifting");
Category.create(title:"Delivery");
Category.create(title:"Yard Work");
Category.create(title:"Personal Assistant");
Category.create(title:"Packing &amp; Unpacking");
Category.create(title:"Painting");
Category.create(title:"Plumbing");
Category.create(title:"Electrical Work");
Category.create(title:"Deep Clean");
Category.create(title:"Organization");
Category.create(title:"Event Staffing");
Category.create(title:"Run Errands");
Category.create(title:"Carpentry");