import React from 'react';
import './Form.css';

const Form = ({ url, setUrl, handleSubmit }) => {
	return (
		<form className="input" onSubmit={handleSubmit}>
			<label htmlFor="url" className="label">
				Enter Url:
			</label>
			<input
				placeholder="Paste your url here"
				id="url"
				type="text"
				required
				autoFocus
				value={url}
				onChange={(e) => setUrl(e.target.value)}
			/>
			<button type="submit" className="btn">
				Shorten
			</button>
		</form>
	);
};

export default Form;
