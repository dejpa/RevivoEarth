import Header from "../components/Header";
import Footer from "../components/Footer";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const direction = ["fa", "ar"].includes(locale) ? "rtl" : "ltr";
  const isRTL = ["fa", "ar"].includes(locale);
  
  return (
    <div dir={direction} lang={locale}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
