import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

const testimonials = [
  [
    {
      content:
        'nais er en fantastisk plattform som har gjort utviklingsprosessen vår mye enklere og mer effektiv!',
      author: {
        name: 'Lars Berg',
        role: 'Backendutvikler hos Team Fantastisk',
        image: avatarImage1,
      },
    },
    {
      content:
        'Jeg er imponert over hvor enkelt det er å bygge, deploye og kjøre applikasjoner med nais. Det har virkelig hjulpet meg som frontendutvikler.',
      author: {
        name: 'Ingrid Nilsen',
        role: 'Frontendutvikler hos Team Utrolig',
        image: avatarImage2,
      },
    },
  ], [
    {
      content:
        'nais har revolusjonert måten vi jobber med applikasjoner på!',
      author: {
        name: 'Per Hansen',
        role: 'Produkteier hos Team Super',
        image: avatarImage3,
      },
    },
    {
      content:
        'Som scrum master er jeg veldig imponert over nais. Det har virkelig forbedret vår infrastruktur og gjort det enklere å utvikle og drifte applikasjoner.',
      author: {
        name: 'Anne Johansen',
        role: 'Scrum Master hos Team Topp',
        image: avatarImage4,
      },
    },
  ], [
    {
      content:
        'Med nais har vi oppnådd betydelige tidsbesparelser i deploy-prosessen. Det har virkelig økt vår produktivitet og gjort det enklere å levere nye funksjoner raskt.',
      author: {
        name: 'Nils Olsen',
        role: 'Tester hos Team Best',
        image: avatarImage5,
      },
    },
    {
      content:
        'Jeg er veldig fornøyd med nais. Det har virkelig forbedret vår utviklingsprosess og gitt oss større fleksibilitet.',
      author: {
        name: 'Eva Larsen',
        role: 'Avdelingsleder hos Team Kult',
        image: avatarImage1,
      },
    },
  ],
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="omtaler"
      aria-label="Dette sier brukerne våre"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Elsket av team i Norge.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Mange team har tatt i bruk nais for å kjøre sine applikasjoner i produksjon. Her er hva noen av dem har å si.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
