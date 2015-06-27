Rails.application.routes.draw do
  resource :birthdays

  root 'home#index'
end
