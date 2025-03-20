import AppHeader from '../shared/AppHeader'
import AppFooter from '../shared/AppFooter'
import PagesMetaHead from '../PagesMetaHead'


const DefaultLayout = ({ children }) => {
  return (
		<div className="flex flex-col min-h-screen">
			<PagesMetaHead />
			<AppHeader />
			<main className="flex-grow">{children}</main>
			<AppFooter />
		</div>
  )
}

export default DefaultLayout
