module UserDecorator
  def name_with_default
    name.presence || screen_name
  end

  def role_value_for_change
    admin? ? 'member' : 'admin'
  end

  def role_label_for_change
    admin? ? 'Remove Admin' : 'Make Admin'
  end
end