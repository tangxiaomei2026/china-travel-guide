'use client';

import { useState } from 'react';

interface Destination {
  id: number;
  name: string;
  region: string;
  description: string;
  highlights: string[];
  bestTime: string;
  image: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: '北京',
    region: '华北',
    description: '中国的首都，汇集了古代文明和现代城市的精华。',
    highlights: ['长城', '故宫', '天安门', '颐和园'],
    bestTime: '春季和秋季',
    image: '🏯',
  },
  {
    id: 2,
    name: '西安',
    region: '西北',
    description: '千年古都，古丝绸之路的起点，历史文化底蕴深厚。',
    highlights: ['兵马俑', '城墙', '大雁塔', '陕西历史博物馆'],
    bestTime: '春季和秋季',
    image: '🏺',
  },
  {
    id: 3,
    name: '杭州',
    region: '华东',
    description: '西湖美景享誉世界，是中国最受欢迎的旅游城市之一。',
    highlights: ['西湖', '灵隐寺', '龙井茶园', '宋城'],
    bestTime: '春季和秋季',
    image: '🏞️',
  },
  {
    id: 4,
    name: '成都',
    region: '西南',
    description: '悠闲的城市节奏，美食文化丰富，大熊猫基地所在地。',
    highlights: ['大熊猫基地', '宽窄巷子', '武侯祠', '锦里'],
    bestTime: '春季和秋季',
    image: '🐼',
  },
  {
    id: 5,
    name: '桂林',
    region: '南方',
    description: '山水甲天下，漓江风景区是国家5A级景区。',
    highlights: ['漓江', '阳朔', '象鼻山', '十里画廊'],
    bestTime: '春季和秋季',
    image: '🏔️',
  },
  {
    id: 6,
    name: '三亚',
    region: '南方',
    description: '海滨城市，拥有中国最美的沙滩和碧蓝的大海。',
    highlights: ['亚龙湾', '天涯海角', '鹿回头', '蜈支洲岛'],
    bestTime: '冬季和春季',
    image: '🏖️',
  },
];

export default function Home() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDestinations = destinations.filter(
    (dest) =>
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🗺️</span>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                中国旅游指南
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#destinations" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition">
                景点
              </a>
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition">
                关于
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            探索中国的壮丽风景
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            从长城的雄伟到西湖的柔美，发现中国最令人惊艳的旅游目的地
          </p>
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="搜索城市或地区..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section id="destinations" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            热门目的地
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((destination) => (
              <div
                key={destination.id}
                onClick={() => setSelectedDestination(destination)}
                className="bg-white dark:bg-slate-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 overflow-hidden"
              >
                <div className="h-40 bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-7xl">
                  {destination.image}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {destination.name}
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                    📍 {destination.region}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {destination.description}
                  </p>
                  <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 rounded-lg hover:shadow-lg transition">
                    了解更多
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                没有找到匹配的目的地，请尝试其他搜索条件。
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedDestination && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedDestination(null)}
        >
          <div
            className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl max-w-2xl w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-6xl">{selectedDestination.image}</span>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedDestination.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400">
                    📍 {selectedDestination.region}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedDestination(null)}
                className="text-2xl text-gray-500 hover:text-gray-700 dark:text-gray-400"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  介绍
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedDestination.description}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  主要景点
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDestination.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  最佳旅游时间
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  🌞 {selectedDestination.bestTime}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedDestination(null)}
              className="w-full mt-6 bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 rounded-lg hover:shadow-lg transition"
            >
              关闭
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2026 中国旅游指南 | 探索中国的美丽
          </p>
        </div>
      </footer>
    </div>
  );
}
