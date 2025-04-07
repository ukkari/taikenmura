import React from 'react';
import { PreviewTemplateComponentProps } from 'decap-cms-core';

const HomePreview = ({ entry, getAsset }) => {
  const data = entry.get('data').toJS();
  
  return (
    <div className="bg-gray-50 text-gray-800">
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center">
            <img src={getAsset(data.logo)} alt="ロゴ" className="h-16 mr-4 rounded" />
            <h1 className="text-2xl md:text-3xl font-bold">{data.title}</h1>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        <section>
          <h2 className="text-2xl font-bold border-b-4 border-blue-600 pb-2 mb-4">
            {data.news_section.title}
          </h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="mb-4">{data.news_section.description}</p>
          </div>
        </section>
        
        {/* 他のセクションもここに追加 */}
      </main>
    </div>
  );
};

CMS.registerPreviewTemplate('home', HomePreview);
