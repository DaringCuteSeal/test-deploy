function ft_m() {
	ft_m_text = document.getElementById('length-ft-m')
	ft_m_val = document.getElementById('ft-m')

	ft_m_text.textContent = input 
	rounded_ft_m = (input * 3.28084).toFixed(precission)
	ft_m_val.textContent = rounded_ft_m
}

function f_c() {
	f_c_text = document.getElementById('temp-f-c')
	f_c_val = document.getElementById('f-c')


	f_c_text.textContent = input + "°F"
	rounded_f_c = ((input-32)/(9/5)).toFixed(precission)
	f_c_val.textContent = rounded_f_c + "°C"
}
function c_f() {
	c_f_text = document.getElementById('temp-c-f')
	c_f_val = document.getElementById('c-f')


	c_f_text.textContent = input + "°C"
	rounded_c_f = ((input * (9/5))+32).toFixed(precission)
	c_f_val.textContent = rounded_c_f + "°F"
}

function m_ft() {
	m_ft_text = document.getElementById('length-m-ft')
	m_ft_val = document.getElementById('m-ft')


	m_ft_text.textContent = input
	rounded_m_ft = (input / 3.28084).toFixed(precission)
	m_ft_val.textContent = rounded_m_ft
}

function kg_lb() {
	kg_lb_text = document.getElementById('mass-kg-lb')
	kg_lb_val = document.getElementById('kg-lb')


	kg_lb_text.textContent = input
	kg_lb_val.textContent = (input * 2.2046228).toFixed(precission)
}

function lb_kg() {
	kg_lb_text = document.getElementById('mass-lb-kg')
	kg_lb_val = document.getElementById('lb-kg')


	kg_lb_text.textContent = input
	kg_lb_val.textContent = (input / 2.2046228).toFixed(precission)
}

function submit() {
	precission = document.getElementById('precission').value
	input = document.getElementById('input').value

	ft_m()
	m_ft()
	c_f()
	f_c()
	kg_lb()
	lb_kg()

}

submit()
