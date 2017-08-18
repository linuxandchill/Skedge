class SubscriptionMailerJob < ActiveJob::Base
  queue_as :subscription

  def perform(user, event)
    p 'Performing job...'
    SubscriptionsMailer.send_upcoming_event(user, event).deliver
  end

end
