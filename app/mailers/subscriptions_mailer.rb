class SubscriptionsMailer < ApplicationMailer
  default from: 'hello@skedge.com'

  def send_upcoming_event(user, event)
    p 'Trying to send email to ' + user.email + ' for event ' + event.title
    @event = event
    mail(to: user.email, subject: "#{event.title} is starting very soon!" )
  end
end
