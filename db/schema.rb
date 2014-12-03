# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141201002609) do

  create_table "areas", force: true do |t|
    t.string   "name"
    t.integer  "state_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "climbs", force: true do |t|
    t.string   "name"
    t.string   "category"
    t.string   "rating"
    t.integer  "integer_rating"
    t.integer  "height"
    t.integer  "pitches"
    t.string   "url"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "state_id"
    t.integer  "area_id"
    t.integer  "subarea_id"
    t.integer  "wall_id"
    t.text     "tags"
    t.integer  "crag_id"
    t.integer  "section_id"
    t.integer  "face_id"
  end

  add_index "climbs", ["area_id"], name: "index_climbs_on_area_id"
  add_index "climbs", ["category"], name: "index_climbs_on_category"
  add_index "climbs", ["crag_id"], name: "index_climbs_on_crag_id"
  add_index "climbs", ["face_id"], name: "index_climbs_on_face_id"
  add_index "climbs", ["height"], name: "index_climbs_on_height"
  add_index "climbs", ["integer_rating"], name: "index_climbs_on_integer_rating"
  add_index "climbs", ["name"], name: "index_climbs_on_name"
  add_index "climbs", ["pitches"], name: "index_climbs_on_pitches"
  add_index "climbs", ["rating"], name: "index_climbs_on_rating"
  add_index "climbs", ["section_id"], name: "index_climbs_on_section_id"
  add_index "climbs", ["state_id"], name: "index_climbs_on_state_id"
  add_index "climbs", ["subarea_id"], name: "index_climbs_on_subarea_id"
  add_index "climbs", ["tags"], name: "index_climbs_on_tags"
  add_index "climbs", ["wall_id"], name: "index_climbs_on_wall_id"

  create_table "crags", force: true do |t|
    t.string   "name"
    t.integer  "state_id"
    t.integer  "area_id"
    t.integer  "subarea_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "faces", force: true do |t|
    t.string   "name"
    t.integer  "state_id"
    t.integer  "area_id"
    t.integer  "subarea_id"
    t.integer  "crag_id"
    t.integer  "section_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "sections", force: true do |t|
    t.string   "name"
    t.integer  "state_id"
    t.integer  "area_id"
    t.integer  "subarea_id"
    t.integer  "crag_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "states", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "subareas", force: true do |t|
    t.string   "name"
    t.integer  "state_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "area_id"
  end

  add_index "subareas", ["area_id"], name: "index_subareas_on_area_id"

  create_table "users", force: true do |t|
    t.string   "username"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "walls", force: true do |t|
    t.string   "name"
    t.integer  "state_id"
    t.integer  "area_id"
    t.integer  "subarea_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "crag_id"
    t.integer  "section_id"
    t.integer  "face_id"
  end

  add_index "walls", ["crag_id"], name: "index_walls_on_crag_id"
  add_index "walls", ["face_id"], name: "index_walls_on_face_id"
  add_index "walls", ["section_id"], name: "index_walls_on_section_id"

end
