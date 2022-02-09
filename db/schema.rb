ActiveRecord::Schema.define(version: 2022_02_07_114148) do
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.datetime "bookingDate", precision: 6
    t.datetime "bookingTime", precision: 6
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_bookings_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "cname"
    t.string "email"
    t.string "password_digest"
    t.string "address1"
    t.string "address2"
    t.integer "mobile"
    t.integer "location"
    t.boolean "admin"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "bookings", "users"
end
