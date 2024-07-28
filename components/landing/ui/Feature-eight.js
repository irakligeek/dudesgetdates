import { Section, Container } from "@/components/craft";
export default function FeatureEight() {
  return (
    <Section className="bg-primary-foreground border-y ">
      <Container className="">
        <h2 className="text-center flex flex-col gap-6 py-8">
          Keep The Conversation Going
        </h2>
        <div className="grid items-stretch md:grid-cols-2 gap-4 lg:gap-0">
          <div className="flex flex-col md:border-0 lg:border-r items-center">
            <p className="text-xl text-center mb-4">Turn this...</p>
            <div className="px-4 py-8 text-sm w-[360px] bg-white rounded-3xl">
              <div className="space-y-4">
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-black py-2 px-3 rounded-full max-w-[260px]">
                    <p>Hey, how are you?</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white py-2 px-3 rounded-full max-w-[260px]">
                    <p>I'm good, thanks! How about you?</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white py-2 px-3 rounded-full max-w-[260px]">
                    <p>Hey!</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  className="flex-grow bg-gray-100 text-black py-2 px-4 rounded-full outline-none"
                  placeholder="iMessage"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center">
            <p className="text-xl text-center mb-4">Into this...</p>
            <div className="px-4 py-8 text-sm w-[360px] bg-white rounded-3xl">
              <div className="space-y-4">
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-black py-2 px-3 rounded-full max-w-[260px]s">
                    <p>Hey, how are you?</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white py-2 px-3 rounded-2xl max-w-[260px]">
                    <p>
                      Hey! I just did my workout and looking sharp for our
                      romantic date
                    </p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-black py-2 px-3 rounded-full max-w-[260px]">
                    <p>Nice! lol where are you taking me? </p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-black py-4 px-3 rounded-full max-w-[260px] relative">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-75"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="flex-grow bg-gray-100 text-black py-2 px-4 rounded-full outline-none"
                    placeholder="iMessage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
