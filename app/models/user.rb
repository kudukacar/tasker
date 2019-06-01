class User < ApplicationRecord

    attr_reader :password

    validates :password_digest, :session_token, :first_name, :last_name, presence: true
    validates :email, uniqueness: true, presence: true 
    validates :email, format: {with: URI::MailTo::EMAIL_REGEXP, message: 'Must be a valid email address' }
    validates :zipcode, presence: true, numericality: { only_integer: true }
    validates :password, length: {minimum: 6}, allow_nil: true 
    validates :tasker, inclusion: { in: [true, false]}

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return user if user && user.is_password?(password)
        nil
    end

    

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end


    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end


    def reset_session_token
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end


end