export const solutions = [
    {
        id: 1,
        icon: "./teachersIcon.webp",
        title: 'For Teachers',
        text: 'Build trust with your students.',
    },
    {
        id: 2,
        icon: "./studentsIcon.webp",
        title: 'For students',
        text: 'Tools to improve your writing and avoid false accusations.',
    },
    {
        id: 3,
        icon: "./writersIcon.webp",
        title: 'For writers',
        text: 'Sound intelligent, not artificial.',
    },
]

export const products = [
    {
        id: 1,
        icon: "./originIcon.webp",
        title: 'Origin-Chrome extension',
        text: 'Scan for AI content as you browse the internet.',
    },
    {
        id: 2,
        icon: "./writersIcon.webp",
        title: 'Human Writing Report',
        text: 'Create a report of your Google Doc to prove you wrote it.',
    },
    {
        id: 3,
        icon: "./apiIcon.webp",
        title: 'API',
        text: 'Integrate with our industry-leading AI detection model',
    },
    {
        id: 4,
        icon: "./canvasIcon.webp",
        title: 'Canvas Integration',
        text: 'Helping institutions accurately identify AI generated content',
    },
    {
        id: 5,
        icon: "./microsoftIcon.webp",
        title: 'Microsoft Word Add-on',
        text: 'Tools to improve your writing and avoid false accusations',
    },
]

export const resources = [
    {
        id: 1,
        icon: "./newsIcon.webp",
        title: 'News',
        text: 'Making headlines around the world.',
    },
    {
        id: 2,
        icon: "./technologyIcon.webp",
        title: 'Technology',
        text: 'See what makes our AI detection # 1.',
    },
    {
        id: 3,
        icon: "./teachersIcon.webp",
        title: 'Education',
        text: 'Build trust with your students.',
    },
]

export const support = [
    {
        id: 1,
        icon: "./customerSupportIcon.webp",
        title: 'Help',
        text: 'Articles, troubleshooting and more.',
    },
    {
        id: 2,
        icon: "./faqIcon.webp",
        title: 'FAQ',
        text: 'Answers to all your GPTZero questions.',
    },
]

export const cardData = [
    {
        id: 1,
        title: 'Deep analysis',
        icon: './files.svg',
        text: 'Access a deeper scan with unprecedented levels of AI text analysis.'
    },
    {
        id: 2,
        title: 'Source scanning',
        icon: './search.svg',
        text: 'Scan documents for plagiarism and our AI copyright check.'
    },
    {
        id: 3,
        title: 'Histories',
        icon: './laptop.svg',
        text: 'Easily scan dozens of files at once, organize, save, and download reports.'
    }
]

export const faqData = [
    {
        id: 1,
        q: 'What is GPTZero?',
        a: 'GPTZero is the leading AI detector for checking whether a document was written by a large language model such as ChatGPT. GPTZero detects AI on sentence, paragraph, and document level. Our model was trained on a large, diverse corpus of human-written and AI-generated text, with a focus on English prose. To date, GPTZero has served over 2.5 million users around the world, and works with over 100 organizations in education, hiring, publishing, legal, and more.',
    },
    {
        id: 2,
        q: 'How do I use GPTZero?',
        a: 'Simply paste in the text you want to check, or upload your file, and we will return an overall detection for your document, as well as sentence-by-sentence highlighting of sentences where we have detected AI. Unlike other detectors, we help you interpret the results with a description of the result, instead of just returning a number.',
    },
    {
        id: 3,
        q: 'When should I use GPTZero?',
        a: "Our users have seen the use of AI-generated text proliferate into education, certification, hiring and recruitment, social writing platforms, disinformation, and beyond. We've created GPTZero as a tool to highlight the possible use of AI in writing text. In particular, we focus on classifying AI use in prose.",
    },
    {
        id: 4,
        q: "Does GPTZero only detect ChatGPT outputs?",
        a: "No, GPTZero works robustly across a range of AI language models, including but not limited to ChatGPT, GPT-4, GPT-3, GPT-2, LLaMA, and AI services based on those models.",
    },
    {
        id: 5,
        q: "Why GPTZero over other detection models?",
        a: "Lastly, many of our users - especially educators - have told us they trust GPTZero because we have only one mission: provide every human with the tools to detect and safely adopt AI technologies. Unlike many providers who recently released detectors as a side product, this mission will always be our number one priority.",
    },
    {
        id: 6,
        q: "What are the limitations of the classifier?",
        a: "The nature of AI-generated content is changing constantly. As such, these results should not be used to punish students. We recommend educators to use our behind-the-scene",
    },
    {
        id: 7,
        q: "What can I do as an educator to reduce the risk of AI misuse?",
        a: "We believe that the best outcome for educators and students arrives by working together proactively to understand the problem of AI misuse and find strategies that hone in on the human value of education. For example, educators can Help students understand the risks of using AI in their work.",
    },
    {
        id: 8,
        q: "I'm an educator who has found AI-generated text by my students. What do I do?",
        a: "Firstly, at GPTZero, we don't believe that any AI detector is perfect. There always exist edge cases with both instances where AI is classified as human, and human is classified as AI. Nonetheless, Ask students to demonstrate their understanding in a controlled environment, whether that is through an in-person assessment, or through an editor that can track their edit history.",
    },
    {
        id: 9,
        q: "What data did you train your model on?",
        a: "Our model is trained on millions of documents spanning various domains of writing including creating writing, scientific writing, blogs, news articles, and more. We test our models on a never-before-seen set of human and AI articles from a section of our large-scale dataset, in addition to a smaller set of challenging articles that are outside its training distribution.",
    },
    {
        id: 10,
        q: "How do I use and interpret the results from your API?",
        a: "Our API returns a document_classification field which indicates the most likely classification of the document. The possible values are HUMAN_ONLY, MIXED, and AI_ONLY. We also provide a probability for each classification, which is returned in the class_probabilities field. The keys for this field are human, ai or mixed. To get the probability for the most likely classification, the predicted_class field can be used. The class probability corresponding to the predicted class can be interpreted as the chance that the detector is correct in its classification. I.e. 90% means that 90% of the time on similar documents our detector is correct in the prediction it makes",
    },
    {
        id: 11,
        q: "Are you storing data from API calls?",
        a: "No. We do not store or collect the documents passed into any calls to our API. We wanted to be overly cautious on the side of storing data from any organizations using our API.",
    }
]