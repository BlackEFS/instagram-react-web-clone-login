import Header from "./components/header";
import Reply from "./components/reply";
import Messages from "pages/inbox/chat/components/messages";
import {useState} from "react";

export default function Chat() {

	const user = {
		name: 'Fatih Şahan',
		avatar: 'https://lh3.googleusercontent.com/ogw/ANLem4bxZ0P9nHyoK22MYNtplcngHywDp_-MWY9iq-k0vA=s32-c-mo'
	}

	const [messages, setMessages] = useState([
		{
			from: {
				id: 'PViTN3T52Kha9N92YX7LkjTvKz63',
				name: 'Fatih Şahan',
				username: 'fatihsahan',
				avatar: 'https://lh3.googleusercontent.com/ogw/ANLem4bxZ0P9nHyoK22MYNtplcngHywDp_-MWY9iq-k0vA=s32-c-mo'
			},
			message: 'grup'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'Kerim Alp',
				username: 'kerimalp',
				avatar: 'https://fotolifeakademi.com/uploads/2023/09/bebek-fotograflari-724x394.webp'
			},
			message: 'test'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'Kerim Alp',
				username: 'kerimalp',
				avatar: 'https://fotolifeakademi.com/uploads/2023/09/bebek-fotograflari-724x394.webp'
			},
			message: 'deneme'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'Kerim Alp',
				username: 'kerimalp',
				avatar: 'https://fotolifeakademi.com/uploads/2023/09/bebek-fotograflari-724x394.webp'
			},
			message: 'Bursa'
		},
		{
			from: {
				id: 'PViTN3T52Kha9N92YX7LkjTvKz63',
				name: 'Fatih Şahan',
				username: 'fatihsahan',
				avatar: 'https://lh3.googleusercontent.com/ogw/ANLem4bxZ0P9nHyoK22MYNtplcngHywDp_-MWY9iq-k0vA=s32-c-mo'
			},
			message: 'w etw etkwe tokw eotk woetk woekt woket owekt owket okwe otkwe otke wotkew tokw etoke otk ept okwet powektpweoktwepotkweptokwetpokwet'
		},
		{
			from: {
				id: 'PViTN3T52Kha9N92YX7LkjTvKz63',
				name: 'Fatih Şahan',
				username: 'fatihsahan',
				avatar: 'https://lh3.googleusercontent.com/ogw/ANLem4bxZ0P9nHyoK22MYNtplcngHywDp_-MWY9iq-k0vA=s32-c-mo'
			},
			message: 'grup'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'Kerim Alp',
				username: 'kerimalp',
				avatar: 'https://fotolifeakademi.com/uploads/2023/09/bebek-fotograflari-724x394.webp'
			},
			message: 'test'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'Kerim Alp',
				username: 'kerimalp',
				avatar: 'https://fotolifeakademi.com/uploads/2023/09/bebek-fotograflari-724x394.webp'
			},
			message: 'deneme'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'Kerim Alp',
				username: 'kerimalp',
				avatar: 'https://fotolifeakademi.com/uploads/2023/09/bebek-fotograflari-724x394.webp'
			},
			message: 'Bursa'
		},
		{
			from: {
				id: 'PViTN3T52Kha9N92YX7LkjTvKz63',
				name: 'Fatih Şahan',
				username: 'fatihsahan',
				avatar: 'https://lh3.googleusercontent.com/ogw/ANLem4bxZ0P9nHyoK22MYNtplcngHywDp_-MWY9iq-k0vA=s32-c-mo'
			},
			message: 'w etw etkwe tokw eotk woetk woekt woket owekt owket okwe otkwe otke wotkew tokw etoke otk ept okwet powektpweoktwepotkweptokwetpokwet'
		},
		{
			from: {
				id: 'PViTN3T52Kha9N92YX7LkjTvKz63',
				name: 'Fatih Şahan',
				username: 'fatihsahan',
				avatar: 'https://lh3.googleusercontent.com/ogw/ANLem4bxZ0P9nHyoK22MYNtplcngHywDp_-MWY9iq-k0vA=s32-c-mo'
			},
			message: 'grup'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'Kerim Alp',
				username: 'kerimalp',
				avatar: 'https://fotolifeakademi.com/uploads/2023/09/bebek-fotograflari-724x394.webp'
			},
			message: 'test'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'Kerim Alp',
				username: 'kerimalp',
				avatar: 'https://fotolifeakademi.com/uploads/2023/09/bebek-fotograflari-724x394.webp'
			},
			message: 'deneme'
		},
		{
			from: {
				id: 'H7UmMJXPGRMYWq4M58iDwYbGSHe2',
				name: 'Kerim Alp',
				username: 'kerimalp',
				avatar: 'https://fotolifeakademi.com/uploads/2023/09/bebek-fotograflari-724x394.webp'
			},
			message: 'Bursa'
		},
		{
			from: {
				id: 'PViTN3T52Kha9N92YX7LkjTvKz63',
				name: 'Fatih Şahan',
				username: 'fatihsahan',
				avatar: 'https://lh3.googleusercontent.com/ogw/ANLem4bxZ0P9nHyoK22MYNtplcngHywDp_-MWY9iq-k0vA=s32-c-mo'
			},
			message: 'w etw etkwe tokw eotk woetk woekt woket owekt owket okwe otkwe otke wotkew tokw etoke otk ept okwet powektpweoktwepotkweptokwetpokwet'
		},
	])

	return (
		<div className="flex-1">
			<Header user={user} />
			<Messages messages={messages} />
			<Reply setMessages={setMessages} />
		</div>
	)
}
