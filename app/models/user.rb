class User < ActiveRecord::Base
	has_many :tick_lists
	has_many :climbs, through: :tick_lists
	validates :email, :username, presence: true
  validates :email, uniqueness: true
  has_secure_password
end
