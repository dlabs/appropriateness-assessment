# Appropriateness Assessment Toolkit

This is an appropriateness assessment toolkit, designed to meet FCA requirements. The toolkit is based on Next.js but can be easily used in other React-based frameworks. The UI elements are built using shadcn/ui and can be extended with Tailwind CSS.

## Features

- **FCA Compliance**: Meets the requirements for appropriateness assessments.
- **React Compatibility**: Although based on Next.js, it can be used with other React frameworks.
- **Customizable**: Easily modify the questions array to suit your needs.
- **UI Flexibility**: Built with shadcn/ui and Tailwind CSS for flexible and extendable UI components.
- **MIT License**: Open source and free to use.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation

Clone the repository:

```bash
git clone https://github.com/dlabs/appropriateness-assessment.git
cd appropriateness-assessment
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

### Customizing Questions

The questions for the assessment can be modified by editing the `questions.ts` file located in the `data` directory. The structure of each question object is as follows:

```typescript
interface Question {
  label: string;
  type: "text" | "radio";
  options?: string[];
  description?: string;
  correct: number;
}

const questions: Question[] = [
  {
    label: "Example question?",
    type: "radio",
    options: ["Option 1", "Option 2", "Option 3"],
    correct: 1,
  },
  // Add more questions here
];

export default questions;
```

## License

This project is licensed under the MIT License.

## Acknowledgments

- Next.js
- shadcn/ui
- Tailwind CSS
- React Hook Form
- Zod

## Contact

For further information, you can contact [ales.zorc@dlabs.si](mailto:ales.zorc@dlabs.si).
