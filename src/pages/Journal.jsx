import { Form, redirect, useNavigation } from 'react-router-dom';

import axios from 'axios';
import { toast } from 'react-toastify';

const journalUrl = 'https://www.course-api.com/cocktails-newsletter';

export const journalAction = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);

	try {
		const response = await axios.post(journalUrl, data);
		toast.success(response.data.msg);
		return redirect('/');
	} catch (error) {
		toast.error(error?.response?.data?.msg);
		return error;
	}
};

const Journal = () => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';

	return (
		<Form className='form' method='POST'>
			<h4>our journal</h4>
			<div className='form-row'>
				<label htmlFor='name' className='form-label'>
					name
				</label>
				<input
					type='text'
					className='form-input'
					name='name'
					id='name'
					required
				/>
			</div>
			<div className='form-row'>
				<label htmlFor='lastName' className='form-label'>
					last name
				</label>
				<input
					type='text'
					className='form-input'
					name='lastName'
					id='lastName'
					required
				/>
			</div>
			<div className='form-row'>
				<label htmlFor='email' className='form-label'>
					email
				</label>
				<input
					type='text'
					className='form-input'
					name='email'
					id='email'
					required
					defaultValue='test@test.com'
				/>
			</div>
			<button
				type='submit'
				className='btn btn-block'
				disabled={isSubmitting}>
				{isSubmitting ? 'subscribing...' : 'subscribe'}
			</button>
		</Form>
	);
};

export default Journal;
