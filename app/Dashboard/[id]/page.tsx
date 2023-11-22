import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  // fetch data
  const product = await fetch(`https://localhost:3000/Dashboard/${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.title,
    openGraph: {
      images: ['https://static.vecteezy.com/system/resources/previews/008/295/031/non_2x/custom-relationship-management-dashboard-ui-design-template-suitable-designing-application-for-android-and-ios-clean-style-app-mobile-free-vector.jpg', ...previousImages],
    },
  }
}
 
export default function Page({ params, searchParams }: Props) {}