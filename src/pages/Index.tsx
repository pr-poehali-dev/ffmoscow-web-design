import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FF</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">FFMoscow</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Услуги</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">О нас</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Цены</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Получить консультацию
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Фулфилмент под ключ для
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Wildberries и Ozon</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Полный цикл обработки заказов: от хранения товаров на складе до доставки покупателям. 
              Интеграция с личными кабинетами маркетплейсов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Оставить заявку
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">товаров на складе</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">мониторинг заказов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.8%</div>
              <div className="text-gray-600">точность обработки</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2 часа</div>
              <div className="text-gray-600">среднее время сборки</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр фулфилмент-услуг для успешных продаж на маркетплейсах
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Package" size={32} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl">Хранение</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Современный склад с климат-контролем и системой учета товаров
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gift" size={32} className="text-purple-600" />
                </div>
                <CardTitle className="text-xl">Упаковка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Профессиональная упаковка по стандартам маркетплейсов
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-green-600" />
                </div>
                <CardTitle className="text-xl">Доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Быстрая доставка на склады WB и Ozon по всей России
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Link" size={32} className="text-orange-600" />
                </div>
                <CardTitle className="text-xl">Интеграция</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Подключение к личным кабинетам WB и Ozon
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Почему выбирают FFMoscow
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Clock" size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Скорость обработки</h3>
                    <p className="text-gray-600">Сборка и отправка заказов в течение 2 часов после поступления</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Eye" size={16} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Прозрачность</h3>
                    <p className="text-gray-600">Полный контроль через личный кабинет и отчетность в реальном времени</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Zap" size={16} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Автоматизация</h3>
                    <p className="text-gray-600">Интеграция с API маркетплейсов для автоматической обработки заказов</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/7c5bc8e1-9f80-4303-92d3-b8ee494a8336.jpg" 
                  alt="Современный складской комплекс FFMoscow"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-medium">Современный складской комплекс</p>
                    <p className="text-blue-100 mt-1">в Московской области</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Для кого наши услуги
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Мы помогаем бизнесу разных масштабов эффективно работать с маркетплейсами
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Icon name="Store" size={24} className="mr-3" />
                  Интернет-магазины
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  Расширение присутствия на маркетплейсах без инвестиций в собственную логистику
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Icon name="TrendingUp" size={24} className="mr-3" />
                  Селлеры
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  Фокус на развитии бизнеса вместо операционных процессов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Прозрачное ценообразование
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Честные цены без скрытых комиссий. Платите только за фактически оказанные услуги
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Калькулятор стоимости</CardTitle>
                <CardDescription>Рассчитайте примерную стоимость услуг для вашего бизнеса</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 border rounded-lg">
                    <Icon name="Package" size={32} className="text-blue-600 mx-auto mb-3" />
                    <div className="font-semibold text-gray-900">Хранение</div>
                    <div className="text-2xl font-bold text-blue-600 mt-2">от 15₽</div>
                    <div className="text-sm text-gray-600">за м³ в месяц</div>
                  </div>
                  
                  <div className="p-6 border rounded-lg">
                    <Icon name="Gift" size={32} className="text-purple-600 mx-auto mb-3" />
                    <div className="font-semibold text-gray-900">Упаковка</div>
                    <div className="text-2xl font-bold text-purple-600 mt-2">от 25₽</div>
                    <div className="text-sm text-gray-600">за заказ</div>
                  </div>
                  
                  <div className="p-6 border rounded-lg">
                    <Icon name="Truck" size={32} className="text-green-600 mx-auto mb-3" />
                    <div className="font-semibold text-gray-900">Доставка</div>
                    <div className="text-2xl font-bold text-green-600 mt-2">от 150₽</div>
                    <div className="text-sm text-gray-600">за поставку</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Получить детальный расчет
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Готовы начать сотрудничество?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Оставьте заявку, и мы свяжемся с вами для обсуждения деталей
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ваше имя
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон
                      </label>
                      <input 
                        type="tel" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Комментарий
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Расскажите о вашем бизнесе..."
                    />
                  </div>
                  
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FF</span>
                </div>
                <span className="text-xl font-semibold">FFMoscow</span>
              </div>
              <p className="text-gray-400">
                Фулфилмент-услуги для успешных продаж на маркетплейсах
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Хранение товаров</li>
                <li>Упаковка заказов</li>
                <li>Доставка</li>
                <li>Интеграция с WB/Ozon</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@ffmoscow.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Московская область
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Документы</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Политика конфиденциальности</li>
                <li>Пользовательское соглашение</li>
                <li>Реквизиты ООО</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FFMoscow. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;