const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  try {
    const response = await fetch('http://localhost:5001/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    if (response.ok) {
      setFormStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      setFormStatus({ type: 'error', message: data.message || 'Failed to send message' });
    }
  } catch (error) {
    setFormStatus({ type: 'error', message: 'Failed to send message' });
  } finally {
    setIsSubmitting(false);
  }
};
