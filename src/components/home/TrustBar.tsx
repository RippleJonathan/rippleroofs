import { FC } from 'react'
import { Container } from '@/components/layout/Container'
import { VALUE_PROPS } from '@/lib/constants'

export const TrustBar: FC = () => {
  return (
    <section className="py-12 bg-white border-y border-primary-100 shadow-sm">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {VALUE_PROPS.map((prop, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2 p-4"
            >
              <div className="text-4xl mb-2">{prop.icon}</div>
              <h3 className="font-display font-bold text-primary-900 text-lg">
                {prop.title}
              </h3>
              <p className="text-primary-600 text-sm">{prop.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
