# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user = User.create(cname: "daniel", email: 'addo@gmail.com', password_digest: "addo12345", 
    address1: 'odootsoo street', address2: 'Fist stop', location: 5051101, mobile: 207312909, admin: true)