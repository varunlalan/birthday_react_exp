Rails.application.routes.draw do
  resources :birthdays

  root 'home#index'
end
