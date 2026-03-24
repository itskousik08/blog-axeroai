import { useState } from 'react';

const faqs = [
  {
    question: 'What is AXEROAI?',
    answer:
      'AXEROAI is an AI research and products company dedicated to building safe, powerful artificial intelligence that benefits humanity. We develop frontier AI models, conduct alignment research, and create tools that help developers build responsible AI applications.',
  },
  {
    question: 'How does AXEROAI work?',
    answer:
      'AXEROAI combines frontier AI research with practical product development. Our team works on large language models, constitutional AI, alignment techniques, and safety practices. Our API lets developers integrate our models into their applications through straightforward HTTP requests.',
  },
  {
    question: 'Is AXEROAI free to use?',
    answer:
      'AXEROAI offers a free tier that includes access to basic AI capabilities with standard rate limits. Our Pro plan unlocks higher limits, priority support, and advanced features. Enterprise plans include dedicated infrastructure, SLA guarantees, and custom contracts.',
  },
  {
    question: 'Is my data stored or used for training?',
    answer:
      'We take data privacy seriously. By default, your API conversations are not used to train our models. Enterprise customers can opt for fully private deployments with zero data retention. Please review our Privacy Policy and Data Processing Agreement for complete details.',
  },
  {
    question: 'How does AXEROAI approach AI safety?',
    answer:
      'Safety is foundational to everything we build. We invest heavily in alignment research, adversarial testing (red-teaming), and responsible scaling practices. We operate under a Responsible Scaling Policy with clearly defined capability thresholds and required safety mitigations before deployment.',
  },
  {
    question: 'Can I use AXEROAI for commercial products?',
    answer:
      'Yes. AXEROAI\'s API is available for commercial use under our standard Terms of Service. Enterprise customers receive additional rights and customizations. Please review our usage policies for prohibited use cases, which primarily restrict applications that could cause harm.',
  },
];

export default function FAQ({ items = faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2" role="list" aria-label="Frequently asked questions">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-xl overflow-hidden transition-colors ${
              isOpen ? 'border-brand/40 bg-card' : 'border-card-border bg-card'
            }`}
            role="listitem"
          >
            <button
              className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 hover:bg-white/[0.02] transition-colors"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              id={`faq-trigger-${index}`}
            >
              <span
                className={`text-sm font-medium leading-snug transition-colors ${
                  isOpen ? 'text-text-primary' : 'text-text-secondary'
                }`}
              >
                {faq.question}
              </span>
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${
                  isOpen
                    ? 'border-brand bg-brand/10 text-brand rotate-180'
                    : 'border-card-border text-text-muted rotate-0'
                }`}
                aria-hidden="true"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </button>

            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? 'max-h-64' : 'max-h-0'
              }`}
            >
              <div className="px-5 pb-4 border-t border-card-border/50">
                <p className="text-sm text-text-muted leading-relaxed pt-3">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
